import { Connection } from "typeorm";
import { DtoFactory } from "./factory/dto.factory";
import { Mapper } from "./factory/mapper.factory";

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
        const res = await this.connection.manager.getRepository(this.TEntity).save(entity);
        // // console.log(res);
        return Mapper.getMapper(this.TMapper).mapRes(undefined, res)
    }

    async update(id: string, dto: any) {
        try {
            // validate
            var errors = DtoFactory.getDto(this.TDto).validate(dto);
            if (errors) {
                return errors;
            }
            let entity: any = await this.connection.manager.getRepository(this.TEntity).findOne({ id: id })
            entity = Mapper.getMapper(this.TMapper).mapReq(entity, dto);
            // // console.log(entity);

            await this.connection.manager.getRepository(this.TEntity).save(entity);
            return Mapper.getMapper(this.TMapper).mapRes(undefined, entity)
        } catch (error) {
            return error
        }
    }

    async delete(id: string) {
        try {
            await this.connection.manager.getRepository(this.TEntity).update({ id: id }, { deleteFlag: 1 });
            return "deleted";
        } catch (error) {
            return error
        }
    }

    async findAll(condition?: any): Promise<any[]> {
        if (!condition) {
            condition = { relations: [], where: { deleteFlag: 0 } };
        } else {
            condition.where.deleteFlag = 0;
        }
        // // console.log(condition)
        const entities: any = await this.connection.manager.getRepository(this.TEntity)
            .find({ relations: condition.relations, where: condition.where, });
        return entities.map(entity => Mapper.getMapper(this.TMapper).mapRes(undefined, entity))
    }

    async findOne(condition?: any) {
        if (!condition) {
            condition = { relations: [], where: { deleteFlag: 0 } };
        } else {
            condition.where.deleteFlag = 0;
        }
        // // console.log(condition)
        const entity: any = await this.connection.manager.getRepository(this.TEntity)
            .findOne({ relations: condition.relations, where: condition.where, });
        return entity ? Mapper.getMapper(this.TMapper).mapRes(undefined, entity) : undefined;
    }

    async findOneWithoutDeleteFlag(condition?: any) {
        if (!condition) {
            condition = { relations: [], where: {} };
        }
        // // console.log(condition)
        const entity: any = await this.connection.manager.getRepository(this.TEntity)
            .findOne({ relations: condition.relations, where: condition.where, });
        return entity ? Mapper.getMapper(this.TMapper).mapRes(undefined, entity) : undefined;
    }

}