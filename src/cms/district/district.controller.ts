import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { GenericService } from 'src/common/generic.service';
import { DistrictEntity } from 'src/database.module/entities';
import { Connection } from 'typeorm';
import { DistrictMapper } from './dto/mapper';
import { DistrictReqDto } from './dto/req-dto';

@ApiTags("CMS/Distric")
@Controller('cms/distric')
export class DistrictController {
    service
    constructor(private connection: Connection) {
        this.service = new GenericService(this.connection, DistrictMapper, DistrictReqDto, DistrictEntity);
     }

    @Post()
    async create(@Body() dto: DistrictReqDto) {
        return this.service.create(dto);
    }

    @Get()
    async findAll() {
        return this.service.findAll();
    }

    @Put(':id')
    put(@Param("id") id: string, @Body() dto: DistrictReqDto) {
        return this.service.put(id, dto);
    }

    @Delete(':id')
    delete(@Param("id") id: string) {
        return this.service.delete(id);
    }
 }
