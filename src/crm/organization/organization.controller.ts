import { AddressMapper } from './../../master-data/address/dto/mapper';
import { AddressReqDto } from './../../master-data/address/dto/req-dto';
import { ProductReqDto } from './../../cms/product/dto/req-dto';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { GenericService } from 'src/common/generic.service';
import { AddressEntity, OrganizationEntity } from 'src/database.module/entities';
import { Connection } from 'typeorm';
import { OrganizationMapper } from './dto/mapper';
import { OrganizationReqDto } from './dto/req-dto';

@ApiTags("CMS/Organization")
@Controller('cms/organization')
export class OrganizationController {
    service: GenericService;
    addressService: GenericService;
    constructor(private connection: Connection) {
        this.service = new GenericService(this.connection, OrganizationMapper, OrganizationReqDto, OrganizationEntity);
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
        const condition = { relations: ["address", "address.wards", "address.district", "address.city"], where: {} };
        return this.service.findAll(condition);
    }
    @Get(':id')
    async findOne(@Param("id") id: string) {
        const condition = {
            relations: ["address", "address.wards", "address.district", "address.city"],
            where: { id }
        };
        return this.service.findOne(condition);
    }

    @Put(':id')
    async put(@Param("id") id: string, @Body() dto: OrganizationReqDto, @Body() addressDto: AddressReqDto) {
        const address = await this.addressService.update(dto.address_id,addressDto);
        return this.service.update(id, dto);
    }

    @Delete(':id')
    delete(@Param("id") id: string) {
        return this.service.delete(id);
    }
}
