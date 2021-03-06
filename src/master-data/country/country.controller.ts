import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { GenericService } from 'src/common/generic.service';
import { CountryEntity } from 'src/database.module/entities/country.entity';
import { Connection } from 'typeorm';
import { CountryMapper } from './dto/mapper';
import { CountryReqDto} from './dto/req-dto';

@ApiTags("CMS/Country")
@Controller('cms/country')
export class CountryController {
    service
    constructor(private connection: Connection) {
        this.service = new GenericService(this.connection, CountryMapper, CountryReqDto, CountryEntity);
     }

    @Post()
    async create(@Body() dto:CountryReqDto) {
        return this.service.create(dto);
    }

    @Get()
    async findAll() {
        return this.service.findAll();
    }

    @Put(':id')
    put(@Param("id") id: string, @Body() dto: CountryReqDto) {
        return this.service.update(id, dto);
    }

    @Delete(':id')
    delete(@Param("id") id: string) {
        return this.service.delete(id);
    }
 }
