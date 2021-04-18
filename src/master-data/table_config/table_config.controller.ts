import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { GenericService } from 'src/common/generic.service';
import { TableConfigEntity } from 'src/database.module/entities/table_config.entity';
import { Connection } from 'typeorm';
import { TableConfigMapper } from './dto/mapper';
import { TableConfigReqDto } from './dto/req-dto';

@ApiTags("CMS/TableConfig")
@Controller('cms/table-config')
export class TableConfigController {
    service: GenericService;
    constructor(private connection: Connection) {
        this.service = new GenericService(this.connection, TableConfigMapper, TableConfigReqDto, TableConfigEntity);
    }

    @Post()
    async create(@Body() dto: TableConfigReqDto) {
        return this.service.create(dto);
    }

    @Get()
    async findAll() {
        return this.service.findAll();
    }

    @Get(":name")
    async findOne(@Param("name") name: string) {
        const condition = { relations: [], where: { name } }
        return this.service.findOne(condition);
    }


    @Put(':id')
    put(@Param("id") id: string, @Body() dto: TableConfigReqDto) {
        return this.service.update(id, dto);
    }

    @Delete(':id')
    delete(@Param("id") id: string) {
        return this.service.delete(id);
    }
}
