import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { GenericService } from 'src/common/generic.service';
import { CategoryEntity } from 'src/database.module/entities/category.entity';
import { ProvinceCityEntity } from 'src/database.module/entities/province_city.entity';
import { Connection } from 'typeorm';
import { ProvinceCityMapper } from './dto/mapper';
import { ProvinceCityReqDto} from './dto/req-dto';

@ApiTags("CMS/ProvinceCity")
@Controller('cms/provincecity')
export class ProvinceCityController {
    service
    constructor(private connection: Connection) {
        this.service = new GenericService(this.connection, ProvinceCityMapper, ProvinceCityReqDto, ProvinceCityEntity);
     }

    @Post()
    async create(@Body() dto:ProvinceCityReqDto) {
        return this.service.create(dto);
    }

    @Get()
    async findAll() {
        return this.service.findAll();
    }

    @Put(':id')
    put(@Param("id") id: string, @Body() dto: ProvinceCityReqDto) {
        return this.service.put(id, dto);
    }

    @Delete(':id')
    delete(@Param("id") id: string) {
        return this.service.delete(id);
    }
 }
