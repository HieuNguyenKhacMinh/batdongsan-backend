import { Body, Controller, Delete, Get, Param, Post, Put, Req } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { GenericService } from 'src/common/generic.service';
import { AddressEntity, ProductEntity } from 'src/database.module/entities';
import { Connection } from 'typeorm';
import { AddressMapper } from '../../master-data/address/dto/mapper';
import { AddressReqDto } from '../../master-data/address/dto/req-dto';
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

    @Get("all/:isBuy")
    async findAll(@Param("isBuy") isBuy: number,@Req() req: any) {
        const organizationId = req.headers["organization_id"];
        const condition = {
            relations: ["formality", "houseDirestion",
                "productUnitType", "project", "wards", "address",
                "balconyDirection", "city", "productType"], where: {}
        };
        if (isBuy != 2) {
            const isBuyHire = isBuy || 0;
            condition.where = { isBuyHire };
        }        
        const products = await this.service.findAll(condition);
        return products.filter(p => p.organization_id === organizationId);
    }


    @Get(":id")
    async findOne(@Param("id") id: string) {
        const condition = {
            relations: ["formality", "houseDirestion",
                "productUnitType", "project", "wards", "address",
                "balconyDirection", "city", "productType"], where: { id }
        };
        return this.service.findOne(condition);
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
