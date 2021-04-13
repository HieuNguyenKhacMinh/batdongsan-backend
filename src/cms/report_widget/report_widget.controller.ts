import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { GenericService } from 'src/common/generic.service';
import { ReportWidgetEntity } from 'src/database.module/entities/report_widget.entity';
import { Connection } from 'typeorm';
import { ReportWidgetMapper } from './dto/mapper';
import { ReportWidgetReqDto } from './dto/req-dto';

@ApiTags("CMS/ReportWidget")
@Controller('cms/report-widget')
export class ReportWidgetController {
    service
    constructor(private connection: Connection) {
        this.service = new GenericService(this.connection, ReportWidgetMapper, ReportWidgetReqDto, ReportWidgetEntity);
     }

    @Post()
    async create(@Body() dto: ReportWidgetReqDto) {
        return this.service.create(dto);
    }

    @Get()
    async findAll() {
        return this.service.findAll();
    }

    @Put(':id')
    put(@Param("id") id: string, @Body() dto: ReportWidgetReqDto) {
        return this.service.update(id, dto);
    }

    @Delete(':id')
    delete(@Param("id") id: string) {
        return this.service.delete(id);
    }
 }
