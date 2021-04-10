import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { GenericService } from 'src/common/generic.service';
import { FormalityEntity } from 'src/database.module/entities';
import { Connection } from 'typeorm';
import { FormalityMapper } from './dto/mapper';
import { FormalityReqDto } from './dto/req-dto';

@ApiTags("CMS/Formality")
@Controller('cms/formality')
export class FormalityController {
    service
    constructor(private connection: Connection) {
        this.service = new GenericService(this.connection, FormalityMapper, FormalityReqDto, FormalityEntity);
     }

    @Post()
    async create(@Body() dto: FormalityReqDto) {
        return this.service.create(dto);
    }

    @Get()
    async findAll() {
        return this.service.findAll();
    }

    @Put(':id')
    put(@Param("id") id: string, @Body() dto: FormalityReqDto) {
        return this.service.update(id, dto);
    }

    @Delete(':id')
    delete(@Param("id") id: string) {
        return this.service.delete(id);
    }
 }
