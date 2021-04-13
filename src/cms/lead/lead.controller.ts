import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { GenericService } from 'src/common/generic.service';
import { LeadEntity } from 'src/database.module/entities';
import { Connection } from 'typeorm';
import { LeadMapper } from './dto/mapper';
import { LeadReqDto } from './dto/req-dto';

@ApiTags("CMS/Lead")
@Controller('cms/Lead')
export class LeadController {
    service
    constructor(private connection: Connection) {
        this.service = new GenericService(this.connection, LeadMapper, LeadReqDto, LeadEntity);
     }

    @Post()
    async create(@Body() dto: LeadReqDto) {
        return this.service.create(dto);
    }

    @Get()
    async findAll() {
        return this.service.findAll();
    }

    @Put(':id')
    put(@Param("id") id: string, @Body() dto: LeadReqDto) {
        return this.service.update(id, dto);
    }

    @Delete(':id')
    delete(@Param("id") id: string) {
        return this.service.delete(id);
    }
 }
