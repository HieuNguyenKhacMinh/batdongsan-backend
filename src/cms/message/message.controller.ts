import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { GenericService } from 'src/common/generic.service';
import { MessageEntity } from 'src/database.module/entities';
import { Connection } from 'typeorm';
import { MessageMapper } from './dto/mapper';
import { MessageReqDto } from './dto/req-dto';

@ApiTags("CMS/Message")
@Controller('cms/message')
export class MessageController {
    service
    constructor(private connection: Connection) {
        this.service = new GenericService(this.connection, MessageMapper, MessageReqDto, MessageEntity);
     }

    @Post()
    async create(@Body() dto: MessageReqDto) {
        return this.service.create(dto);
    }

    @Get()
    async findAll() {
        return this.service.findAll();
    }

    @Put(':id')
    put(@Param("id") id: string, @Body() dto: MessageReqDto) {
        return this.service.update(id, dto);
    }

    @Delete(':id')
    delete(@Param("id") id: string) {
        return this.service.delete(id);
    }
 }
