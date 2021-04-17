import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { GenericService } from 'src/common/generic.service';
import { AddressEntity, ProductEntity } from 'src/database.module/entities';
import { Connection } from 'typeorm';
import { AddressMapper } from '../address/dto/mapper';
import { AddressReqDto } from '../address/dto/req-dto';
import { ProductMapper } from './dto/mapper';
import { ProductReqDto } from './dto/req-dto';

@ApiTags("CMS/Product")
@Controller('cms/product')
export class ProductController {
    service: GenericService;
    addressService: GenericService;
    constructor(private connection: Connection) {
        this.service = new GenericService(this.connection, ProductMapper, ProductReqDto, ProductEntity);
        this.addressService = new GenericService(this.connection, AddressMapper, AddressReqDto, AddressEntity);
    }

    @Post()
    async create(@Body() dto: ProductReqDto, @Body() addressDto: AddressReqDto) {
        const address = await this.addressService.create(addressDto);
        dto.address_id = address.id;
        return this.service.create(dto);
    }

    @Get()
    async findAll() {
        const condition = {
            relations: ["formality", "houseDirestion",
                "productUnitType", "project", "wards", "address",
                "balconyDirection", "city", "productType"], where: {}
        };
        return this.service.findAll(condition);
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
