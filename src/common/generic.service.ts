import { Connection } from "typeorm";
import { DtoFactory } from "./dto";
import { Mapper } from "./mapper";

export class GenericService {
    connection: Connection;
    TMapper: any;
    TEntity: any;
    TDto: any;
    constructor(connection: Connection, TMapper: any, TDto: any, TEntity: any) {
        this.connection = connection;
        this.TMapper = TMapper;
        this.TEntity = TEntity;
        this.TDto = TDto;
    }

    async create(dto: any) {
        var errors = DtoFactory.getDto(this.TDto).validate(dto);
        if (errors) {
            return errors;
        }
        let entity: any = Mapper.getMapper(this.TMapper).mapReq(undefined, dto)
        console.log(entity)
        const res = await this.connection.manager.getRepository(this.TEntity).save(entity);
        return Mapper.getMapper(this.TMapper).mapRes(undefined, res)
    }

    async update(id: string, dto: any) {
        try {
            // validate
            var errors = DtoFactory.getDto(this.TDto).validate(dto);
            if (errors) {
                return errors;
            }
            let entity: any = await this.connection.manager.getRepository(this.TEntity).findOne({ Id: id })
            entity = Mapper.getMapper(this.TMapper).mapReq(entity, dto);
            await this.connection.manager.getRepository(this.TEntity).update({ Id: id }, entity);
            return Mapper.getMapper(this.TMapper).mapRes(undefined, entity)
        } catch (error) {
            return error
        }
    }

    async delete(id: string) {
        try {
            await this.connection.manager.getRepository(this.TEntity).update({ Id: id }, { deleteFlag: 1 });
            return "deleted";
        } catch (error) {
            return error
        }
    }

    async findAll(condition?: any) {
        if (!condition) {
            condition = { relations: [], where: { deleteFlag: 0 } };
        } else {
            condition.where.deleteFlag = 0;
        }
        console.log(condition)
        const entities: any = await this.connection.manager.getRepository(this.TEntity)
            .find({ relations: condition.relations, where: condition.where, });
        return entities.map(entity => Mapper.getMapper(this.TMapper).mapRes(undefined, entity))
    }

    findOne() {

    }
}