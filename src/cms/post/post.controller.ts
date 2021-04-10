import { Body, Controller, Delete, Get, Param, Post, Put, Query, Req } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { GenericService } from 'src/common/generic.service';
import { PostEntity } from 'src/database.module/entities';
import { Connection } from 'typeorm';
import { ConditionDto } from './dto/condition.dto';
import { PostMapper } from './dto/mapper';
import { PostReqDto } from './dto/req-dto';

@ApiTags("CMS/Posts")
@Controller("cms/posts")
export class PostController {
    service: GenericService;
    constructor(private connection: Connection) {
        this.service = new GenericService(this.connection, PostMapper, PostReqDto, PostEntity);
    }

    @Post()
    async create(@Body() dto: PostReqDto) {
        return this.service.create(dto);
    }

    @Post('all')
    async findAll(@Body() dto: ConditionDto) {
        const condition: any = { where: {} };
        if (dto.category_id) condition.where.categoryId = dto.category_id;
        if (dto.status) condition.where.statusId = dto.status;
        return this.service.findAll(condition);
    }

    @Put(':id')
    put(@Param("id") id: string, @Body() dto: PostReqDto) {
        return this.service.update(id, dto);
    }

    @Delete(':id')
    delete(@Param("id") id: string) {
        return this.service.delete(id);
    }
}
