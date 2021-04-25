import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { GenericService } from 'src/common/generic.service';
import { UserEntity } from 'src/database.module/entities/User.entity';
import { Connection } from 'typeorm';
import { UserMapper } from './dto/mapper';
import { UserReqDto } from './dto/req-dto';

@ApiTags("CMS/User")
@Controller('cms/user')
export class UserController {
    service
    constructor(private connection: Connection) {
        this.service = new GenericService(this.connection, UserMapper, UserReqDto, UserEntity);
     }

    @Post()
    async create(@Body() dto: UserReqDto) {
        return this.service.create(dto);
    }

    @Get()
    async findAll() {
        const condition = { relations: ["organization"], where: {} };
        return this.service.findAll(condition);
    }

    @Put(':id')
    put(@Param("id") id: string, @Body() dto: UserReqDto) {
        return this.service.update(id, dto);
    }

    @Delete(':id')
    delete(@Param("id") id: string) {
        return this.service.delete(id);
    }
 }
