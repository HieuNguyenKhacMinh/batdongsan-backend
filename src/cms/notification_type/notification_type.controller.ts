import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { GenericService } from 'src/common/generic.service';
import { NotificationTypeEntity } from 'src/database.module/entities';
import { CategoryEntity } from 'src/database.module/entities/category.entity';
import { Connection } from 'typeorm';
import { NotificationTypeMapper } from './dto/mapper';
import { NotificationTypeReqDto} from './dto/req-dto';

@ApiTags("CMS/NotificationType")
@Controller('cms/notification-type')
export class NotificationTypeController {
    service
    constructor(private connection: Connection) {
        this.service = new GenericService(this.connection, NotificationTypeMapper, NotificationTypeReqDto, NotificationTypeEntity);
     }

    @Post()
    async create(@Body() dto:NotificationTypeReqDto) {
        return this.service.create(dto);
    }

    @Get()
    async findAll() {
        return this.service.findAll();
    }

    @Put(':id')
    put(@Param("id") id: string, @Body() dto: NotificationTypeReqDto) {
        return this.service.put(id, dto);
    }

    @Delete(':id')
    delete(@Param("id") id: string) {
        return this.service.delete(id);
    }
 }
