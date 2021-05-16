import { Body, Controller, Delete, Get, Param, Post, Put, Req } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { GenericService } from 'src/common/generic.service';
import { AddressEntity, ProductEntity, FileEntity } from 'src/database.module/entities';
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
    async create(@Body() dto: ProductReqDto, @Body() addressDto: AddressReqDto, @Req() req: any) {
        const orgId = req.headers["organization_id"];
        const userId = req.headers["user_id"];
        dto.organization_id = orgId;
        dto.user_id= userId;
        const address = await this.addressService.create(addressDto);
        dto.address_id = address.id;

        const product = await this.service.create(dto);

        await this.connection.getRepository(FileEntity).update({ id: dto.file_id },
            { productId: product.id });
        return product;
    }

    @Get("all/:isBuy")
    async findAll(@Param("isBuy") isBuy: number, @Req() req: any) {
        const organizationId = req.headers["organization_id"];
        const condition = {
            relations: ["formality", "houseDirestion",
                "productUnitType", "project", "wards", "address",
                "balconyDirection", "city", "productType", "wishlists", 
                "files","user","organization"], where: {}
        };

        if (isBuy != 2) {
            const isBuyHire = isBuy || 0;
            condition.where = { isBuyHire };
        }

        let products = await this.service.findAll(condition);

        // filter wishlist deleteFlag=  1
        products = products.map(p => {
            p.wishlists = p.wishlists.filter(w => w.delete_flag === 0);
            return p;
        })

        if (!organizationId) {
            return products;
        }
        
        return products.filter(p => p.organization_id === organizationId);
    }


    @Get(":id")
    async findOne(@Param("id") id: string) {
        const condition = {
            relations: ["formality", "houseDirestion",
                "productUnitType", "project", "wards", "address",
                "balconyDirection", "city", "productType",
                "comments", "comments.createdByUser",
                "comments.children", "comments.children.createdByUser", "wishlists", "files", "user"], where: { id }
        };
        return this.service.findOne(condition);
    }

    @Put(':id')
    async put(@Param("id") id: string, @Body() dto: ProductReqDto) {
        console.log(dto.title);
        
        const product: any = await this.service.update(id, dto);

        await this.connection.getRepository(FileEntity).update({ id: dto.file_id },
            { productId: product.id });
        return product;
    }

    @Delete(':id')
    delete(@Param("id") id: string) {
        return this.service.delete(id);
    }
}
