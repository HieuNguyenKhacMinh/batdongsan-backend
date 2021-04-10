import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { GenericService } from 'src/common/generic.service';
import { PostEntity } from 'src/database.module/entities';
import { Connection } from 'typeorm';
import { PostReqDto } from './dto/req-dto';
import { PostMapper } from './dto/mapper';

@ApiTags("CMS/Posts")
@Controller("cms/posts")
export class PostController { 
    service
    constructor(private connection: Connection) {
        this.service = new GenericService(this.connection, PostMapper, PostReqDto, PostEntity);
     }

    @Post()
    async create(@Body() dto: PostReqDto) {
        return this.service.create(dto);
    }

    @Get()
    async findAll() {
        return this.service.findAll();
    }

    @Put(':id')
    put(@Param("id") id: string, @Body() dto: PostReqDto) {
        return this.service.put(id, dto);
    }

    @Delete(':id')
    delete(@Param("id") id: string) {
        return this.service.delete(id);
    }
}
