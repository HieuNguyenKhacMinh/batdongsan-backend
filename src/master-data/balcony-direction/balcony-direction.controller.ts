import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { GenericService } from 'src/common/generic.service';
import { BalconydirectionEntity } from 'src/database.module/entities';
import { CategoryEntity } from 'src/database.module/entities/category.entity';
import { Connection } from 'typeorm';
import { BalconydirectionMapper } from './dto/mapper';
import { BalconydirectionReqDto} from './dto/req-dto';

@ApiTags("CMS/BalconyDirection")
@Controller('cms/balcony-direction')
export class BalconydirectionController {
    service
    constructor(private connection: Connection) {
        this.service = new GenericService(this.connection, BalconydirectionMapper, BalconydirectionReqDto, BalconydirectionEntity);
     }

    @Post()
    async create(@Body() dto:BalconydirectionReqDto) {
        return this.service.create(dto);
    }

    @Get()
    async findAll() {
        return this.service.findAll();
    }

    @Put(':id')
    put(@Param("id") id: string, @Body() dto: BalconydirectionReqDto) {
        return this.service.update(id, dto);
    }

    @Delete(':id')
    delete(@Param("id") id: string) {
        return this.service.delete(id);
    }
 }
