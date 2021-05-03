import { Body, Controller, Delete, Req, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { GenericService } from 'src/common/generic.service';
import { NotificationEntity } from 'src/database.module/entities';
import { Connection } from 'typeorm';
import { NotificationMapper } from './dto/mapper';
import { NotificationReqDto } from './dto/req-dto';

@ApiTags("CMS/Notification")
@Controller('cms/notification')
export class NotificationController {
    service: GenericService;
    constructor(private connection: Connection) {
        this.service = new GenericService(this.connection, NotificationMapper, NotificationReqDto, NotificationEntity);
    }

    @Post()
    async create(@Body() dto: NotificationReqDto) {
        return this.service.create(dto);
    }

    @Get()
    async findAll(@Req() req: any) {
        const organizationId = req.headers["organization_id"];
        const condition = {
            relations: ["organization", "user", "product", "project",
                "post", "contact", "lead", "opportunity",
                "wishlist"], where: { organizationId },
        };
        return this.service.findAll(condition);
    }

    @Put(':id')
    put(@Param("id") id: string, @Body() dto: NotificationReqDto) {
        return this.service.update(id, dto);
    }

    @Delete(':id')
    delete(@Param("id") id: string) {
        return this.service.delete(id);
    }
}
