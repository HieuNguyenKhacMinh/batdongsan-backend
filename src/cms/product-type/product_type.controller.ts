import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { GenericService } from 'src/common/generic.service';
import { ProductTypeEntity } from 'src/database.module/entities';
import { Connection } from 'typeorm';
import { ProductTypeMapper } from './dto/mapper';
import { ProductTypeReqDto} from './dto/req-dto';

@ApiTags("CMS/ProductType")
@Controller('cms/product-type')
export class ProductTypeController {
    service
    constructor(private connection: Connection) {
        this.service = new GenericService(this.connection, ProductTypeMapper, ProductTypeReqDto, ProductTypeEntity);
     }

    @Post()
    async create(@Body() dto:ProductTypeReqDto) {
        return this.service.create(dto);
    }

    @Get()
    async findAll() {
        return this.service.findAll();
    }

    @Put(':id')
    put(@Param("id") id: string, @Body() dto: ProductTypeReqDto) {
        return this.service.put(id, dto);
    }

    @Delete(':id')
    delete(@Param("id") id: string) {
        return this.service.delete(id);
    }
 }
