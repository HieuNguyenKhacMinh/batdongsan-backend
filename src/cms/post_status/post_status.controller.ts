import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { GenericService } from 'src/common/generic.service';
import { ReadStatusEntity } from 'src/database.module/entities';
import { Connection } from 'typeorm';
import { StatusMapper } from './dto/mapper';
import { StatusReqDto } from './dto/req-dto';

@ApiTags("CMS/PostStatus")
@Controller("cms/posts-status")
export class PostStatusController {
    service
    constructor(private connection: Connection) {
        this.service = new GenericService(this.connection, StatusMapper, StatusReqDto, ReadStatusEntity);
     }

    @Post()
    async create(@Body() dto: StatusReqDto) {
        return this.service.create(dto);
    }

    @Get()
    async findAll() {
        return this.service.findAll();
    }

    @Put(':id')
    put(@Param("id") id: string, @Body() dto: StatusReqDto) {
        return this.service.update(id, dto);
    }

    @Delete(':id')
    delete(@Param("id") id: string) {
        return this.service.delete(id);
    }
 }

