import { OrderEntity } from './../../database.module/entities/order.entity';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { GenericService } from 'src/common/generic.service';
import { Connection } from 'typeorm';
import { OrderMapper } from './dto/mapper';
import { OrderReqDto} from './dto/req-dto';

@ApiTags("CMS/Order")
@Controller('cms/order')
export class OrderController {
    service
    constructor(private connection: Connection) {
        this.service = new GenericService(this.connection, OrderMapper, OrderReqDto, OrderEntity);
     }

    @Post()
    async create(@Body() dto:OrderReqDto) {
        return this.service.create(dto);
    }

    @Get()
    async findAll() {
        const condition = { relations: ["user", "product"], where: {} };
        return this.service.findAll(condition);
    }

    @Put(':id')
    put(@Param("id") id: string, @Body() dto: OrderReqDto) {
        return this.service.update(id, dto);
    }

    @Delete(':id')
    delete(@Param("id") id: string) {
        return this.service.delete(id);
    }
 }
