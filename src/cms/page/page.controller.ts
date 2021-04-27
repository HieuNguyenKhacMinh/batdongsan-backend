import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { GenericService } from 'src/common/generic.service';
import { PageEntity } from 'src/database.module/entities';
import { Connection } from 'typeorm';
import { PageMapper } from './dto/mapper';
import { PageReqDto } from './dto/req-dto';

@ApiTags("CMS/Page")
@Controller('cms/page')
export class PageController {
    service
    constructor(private connection: Connection) {
        this.service = new GenericService(this.connection, PageMapper, PageReqDto, PageEntity);
    }

    @Post()
    async create(@Body() dto: PageReqDto) {
        return this.service.create(dto);
    }

    @Get()
    async findAll() {
        return this.service.findAll();
    }

    @Get(":slug")
    async getOne(@Param("slug") slug: string) {
        const condition = { where: { slug } }
        return this.service.findOne(condition);
    }
    @Put(':id')
    put(@Param("id") id: string, @Body() dto: PageReqDto) {
        return this.service.update(id, dto);
    }

    @Delete(':id')
    delete(@Param("id") id: string) {
        return this.service.delete(id);
    }
}
