import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { GenericService } from 'src/common/generic.service';
import { WidgetEntity } from 'src/database.module/entities/Widget.entity';
import { Connection } from 'typeorm';
import { WidgetMapper } from './dto/mapper';
import { WidgetReqDto } from './dto/req-dto';

@ApiTags("CMS/Widget")
@Controller('cms/widget')
export class WidgetController {
    service
    constructor(private connection: Connection) {
        this.service = new GenericService(this.connection, WidgetMapper, WidgetReqDto, WidgetEntity);
     }

    @Post()
    async create(@Body() dto: WidgetReqDto) {
        return this.service.create(dto);
    }

    @Get()
    async findAll() {
        return this.service.findAll();
    }

    @Put(':id')
    put(@Param("id") id: string, @Body() dto: WidgetReqDto) {
        return this.service.put(id, dto);
    }

    @Delete(':id')
    delete(@Param("id") id: string) {
        return this.service.delete(id);
    }
 }
