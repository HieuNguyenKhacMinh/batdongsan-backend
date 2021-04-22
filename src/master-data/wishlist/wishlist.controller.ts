import { WishlistEntity } from './../../database.module/entities/wishlist.entity';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { GenericService } from 'src/common/generic.service';
import { Connection } from 'typeorm';
import { WishlistMapper } from './dto/mapper';
import { WishlistReqDto } from './dto/req-dto';

@ApiTags("CMS/Wishlist")
@Controller('cms/wishlist')
export class WishlistController {
    service
    constructor(private connection: Connection) {
        this.service = new GenericService(this.connection, WishlistMapper, WishlistReqDto, WishlistEntity);
    }

    @Post()
    async create(@Body() dto: WishlistReqDto) {
        return this.service.create(dto);
    }

    @Get()
    async findAll() {
        const condition = { relations: ["user", "product"], where: {} };
        return this.service.findAll(condition);
    }

    @Put(':id')
    put(@Param("id") id: string, @Body() dto: WishlistReqDto) {
        return this.service.update(id, dto);
    }

    @Delete(':id')
    delete(@Param("id") id: string) {
        return this.service.delete(id);
    }
}
