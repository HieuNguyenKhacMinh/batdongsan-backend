import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { GenericService } from 'src/common/generic.service';
import { CommentEntity } from 'src/database.module/entities';
import { Connection } from 'typeorm';
import { CommentMapper } from './dto/mapper';
import { CommentReqDto } from './dto/req-dto';

@ApiTags("CMS/Comment")
@Controller('cms/comment')
export class CommentController {
    service
    constructor(private connection: Connection) {
        this.service = new GenericService(this.connection, CommentMapper, CommentReqDto, CommentEntity);
     }

    @Post()
    async create(@Body() dto: CommentReqDto) {
        return this.service.create(dto);
    }

    @Get()
    async findAll() {
        return this.service.findAll();
    }

    @Put(':id')
    put(@Param("id") id: string, @Body() dto: CommentReqDto) {
        return this.service.update(id, dto);
    }

    @Delete(':id')
    delete(@Param("id") id: string) {
        return this.service.delete(id);
    }
 }
