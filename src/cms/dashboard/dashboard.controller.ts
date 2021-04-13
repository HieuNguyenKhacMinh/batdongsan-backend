import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { GenericService } from 'src/common/generic.service';
import { DashboardEntity } from 'src/database.module/entities/dashboard.entity';
import { Connection } from 'typeorm';
import { DashboardMapper } from './dto/mapper';
import { DashboardReqDto } from './dto/req-dto';

@ApiTags("CMS/Dashboard")
@Controller('cms/Dashboard')
export class DashboardController {
    service
    constructor(private connection: Connection) {
        this.service = new GenericService(this.connection, DashboardMapper, DashboardReqDto, DashboardEntity);
     }

    @Post()
    async create(@Body() dto: DashboardReqDto) {
        return this.service.create(dto);
    }

    @Get()
    async findAll() {
        return this.service.findAll();
    }

    @Put(':id')
    put(@Param("id") id: string, @Body() dto: DashboardReqDto) {
        return this.service.update(id, dto);
    }

    @Delete(':id')
    delete(@Param("id") id: string) {
        return this.service.delete(id);
    }
 }
