import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { GenericService } from 'src/common/generic.service';
import { AddressEntity } from 'src/database.module/entities';
import { Connection } from 'typeorm';
import { AddressMapper } from './dto/mapper';
import { AddressReqDto } from './dto/req-dto';

@ApiTags("CMS/Address")
@Controller('cms/address')
export class AddressController {
    service
    constructor(private connection: Connection) {
        this.service = new GenericService(this.connection, AddressMapper, AddressReqDto, AddressEntity);
     }

    @Post()
    async create(@Body() dto: AddressReqDto) {
        return this.service.create(dto);
    }

    @Get()
    async findAll() {
        return this.service.findAll();
    }

    @Put(':id')
    put(@Param("id") id: string, @Body() dto: AddressReqDto) {
        return this.service.put(id, dto);
    }

    @Delete(':id')
    delete(@Param("id") id: string) {
        return this.service.delete(id);
    }
 }
