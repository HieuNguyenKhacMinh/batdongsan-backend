import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { GenericService } from 'src/common/generic.service';
import { WardsEntity } from 'src/database.module/entities';
import { Connection } from 'typeorm';
import { WardsMapper } from './dto/mapper';
import { WardsReqDto } from './dto/req-dto';

@ApiTags("CMS/Wards")
@Controller('cms/Wards')
export class WardsController {
    service
    constructor(private connection: Connection) {
        this.service = new GenericService(this.connection, WardsMapper, WardsReqDto, WardsEntity);
     }

    @Post()
    async create(@Body() dto: WardsReqDto) {
        return this.service.create(dto);
    }

    @Get()
    async findAll() {
        return this.service.findAll();
    }

    @Put(':id')
    put(@Param("id") id: string, @Body() dto: WardsReqDto) {
        return this.service.put(id, dto);
    }

    @Delete(':id')
    delete(@Param("id") id: string) {
        return this.service.delete(id);
    }
 }
