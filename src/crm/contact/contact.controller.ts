import { Body, Controller, Delete, Get, Param, Post, Put, Req } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { GenericService } from 'src/common/generic.service';
import { AddressEntity, ContactEntity } from 'src/database.module/entities';
import { AddressMapper } from 'src/master-data/address/dto/mapper';
import { AddressReqDto } from 'src/master-data/address/dto/req-dto';
import { Connection } from 'typeorm';
import { ContactMapper } from './dto/mapper';
import { ContactReqDto } from './dto/req-dto';

@ApiTags("CMS/Contact")
@Controller('cms/contact')
export class ContactController {
    service: GenericService;
    addressService: GenericService;
    constructor(private connection: Connection) {
        this.service = new GenericService(this.connection, ContactMapper, ContactReqDto, ContactEntity);
        this.addressService = new GenericService(this.connection, AddressMapper, AddressReqDto, AddressEntity);
    }

    @Post()
    async create(@Body() dto: ContactReqDto, @Body() addressDto: AddressReqDto,@Req() req: any) {
        dto.user2_id = req.headers["user2_id"];
        const address = await this.addressService.create(addressDto);
        dto.address_id = address.id;
        return this.service.create(dto);
    }

    @Get()
    async findAll(@Req() req: any) {
        const organizationId = req.headers["organization_id"];
        const condition: any = { relations: ["wards", "city", "district", "country", "user","organization"], where: {} };
        let contacts =await this.service.findAll(condition);
        if (!organizationId) {
            return contacts;
        }
        return contacts.filter(p => p.organization_id === organizationId);
    }
    @Put(':id')
    put(@Param("id") id: string, @Body() dto: ContactReqDto) {
        return this.service.update(id, dto);
    }

    @Delete(':id')
    delete(@Param("id") id: string) {
        return this.service.delete(id);
    }
}
