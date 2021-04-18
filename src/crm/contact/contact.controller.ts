import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { GenericService } from 'src/common/generic.service';
import { ContactEntity } from 'src/database.module/entities';
import { Connection } from 'typeorm';
import { ContactMapper } from './dto/mapper';
import { ContactReqDto } from './dto/req-dto';

@ApiTags("CMS/Contact")
@Controller('cms/contact')
export class ContactController {
    service
    constructor(private connection: Connection) {
        this.service = new GenericService(this.connection, ContactMapper, ContactReqDto, ContactEntity);
     }

    @Post()
    async create(@Body() dto: ContactReqDto) {
        return this.service.create(dto);
    }

    @Get()
    async findAll() {
        return this.service.findAll();
    }

    @Put(':id')
    put(@Param("id") id: string, @Body() dto: ContactReqDto) {
        return this.service.update(id, dto);
    }

    @Delete(':id')
    delete(@Param("id") id: string) {
        return this.service.delete(id);
    }
 }
