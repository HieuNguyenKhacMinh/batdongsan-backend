import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { GenericService } from 'src/common/generic.service';
import { ReadStatusEntity } from 'src/database.module/entities';
import { Connection } from 'typeorm';
import { ReadStatusMapper } from './dto/mapper';
import { ReadStatusReqDto} from './dto/req-dto';

@ApiTags("CMS/ReadStatus")
@Controller('cms/readstatus')
export class ReadStatusController {
    service
    constructor(private connection: Connection) {
        this.service = new GenericService(this.connection, ReadStatusMapper, ReadStatusReqDto, ReadStatusEntity);
     }

    @Post()
    async create(@Body() dto:ReadStatusReqDto) {
        return this.service.create(dto);
    }

    @Get()
    async findAll() {
        return this.service.findAll();
    }

    @Put(':id')
    put(@Param("id") id: string, @Body() dto: ReadStatusReqDto) {
        return this.service.update(id, dto);
    }

    @Delete(':id')
    delete(@Param("id") id: string) {
        return this.service.delete(id);
    }
 }
