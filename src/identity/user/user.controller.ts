import { Body, Controller, Delete, Get, Param, Post, Put, Req } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { GenericService } from 'src/common/generic.service';
import { UserEntity } from 'src/database.module/entities/User.entity';
import { Connection } from 'typeorm';
import { UserMapper } from './dto/mapper';
import { UserReqDto } from './dto/req-dto';

@ApiTags("CMS/User")
@Controller('cms/user')
export class UserController {
    service: GenericService
    constructor(private connection: Connection) {
        this.service = new GenericService(this.connection, UserMapper, UserReqDto, UserEntity);
    }

    @Post()
    async create(@Body() dto: UserReqDto) {
        return this.service.create(dto);
    }

    @Get()
    async findAll(@Req() req: any) {
        const organizationId = req.headers["organization_id"];
        const condition = { relations: ["organization"], where: {} };
        const users = await this.service.findAll(condition);
        return users.filter(p => p.organization_id === organizationId);
    }

    @Get(':id')
    async findOne(@Param("id") id: string) {
        const condition = {
            relations: ["organization"],
            where: { id }
        };
        return this.service.findOne(condition);
    }


    @Put(':id')
    put(@Param("id") id: string, @Body() dto: UserReqDto) {
        return this.service.update(id, dto);
    }

    @Delete(':id')
    delete(@Param("id") id: string) {
        return this.service.delete(id);
    }

    @Delete('deactive/:id')
    deactive(@Param("id") id: string) {
        return this.connection.createQueryBuilder()
            .update(UserEntity)
            .set({ deactive: 1 })
            .where("id = :id", { id })
            .execute();
    }

    @Put('active/:id')
    active(@Param("id") id: string) {
        return this.connection.createQueryBuilder()
            .update(UserEntity)
            .set({ deactive: 0 })
            .where("id = :id", { id })
            .execute();
    }
}
