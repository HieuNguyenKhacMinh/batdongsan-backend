import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { GenericService } from 'src/common/generic.service';
import { CityEntity } from 'src/database.module/entities';
import { Connection } from 'typeorm';
import { ProvinceCityMapper } from './dto/mapper';
import { ProvinceCityReqDto } from './dto/req-dto';

//  Tỉnh, thành phố trực thuộc trung ương
@ApiTags("CMS/ProvinceCity")
@Controller('cms/province-city')
export class ProvinceCityController {
    service
    constructor(private connection: Connection) {
        this.service = new GenericService(this.connection, ProvinceCityMapper, ProvinceCityReqDto, CityEntity);
    }

    @Post()
    async create(@Body() dto: ProvinceCityReqDto) {
        return this.service.create(dto);
    }

    @Get()
    async findAll() {
        const condition = { relations: ["country"], where: {} };
        return this.service.findAll(condition);
    }

    @Put(':id')
    put(@Param("id") id: string, @Body() dto: ProvinceCityReqDto) {
        return this.service.update(id, dto);
    }

    @Delete(':id')
    delete(@Param("id") id: string) {
        return this.service.delete(id);
    }
}
