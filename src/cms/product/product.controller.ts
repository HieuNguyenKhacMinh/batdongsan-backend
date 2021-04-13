import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { GenericService } from 'src/common/generic.service';
import { ProductEntity } from 'src/database.module/entities';
import { Connection } from 'typeorm';
import { ProductMapper } from './dto/mapper';
import { ProductReqDto} from './dto/req-dto';

@ApiTags("CMS/Product")
@Controller('cms/product')
export class ProductController {
    service
    constructor(private connection: Connection) {
        this.service = new GenericService(this.connection, ProductMapper, ProductReqDto, ProductEntity);
     }

    @Post()
    async create(@Body() dto:ProductReqDto) {
        return this.service.create(dto);
    }

    @Get()
    async findAll() {
        return this.service.findAll();
    }

    @Put(':id')
    put(@Param("id") id: string, @Body() dto: ProductReqDto) {
        return this.service.update(id, dto);
    }

    @Delete(':id')
    delete(@Param("id") id: string) {
        return this.service.delete(id);
    }
 }
