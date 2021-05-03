import { Body, Controller, Delete, Get, Param, Post, Put, Req } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { NotificationType } from 'src/common/enums';
import { GenericService } from 'src/common/generic.service';
import { CommentEntity, NotificationEntity, ProductEntity } from 'src/database.module/entities';
import { Connection } from 'typeorm';
import { CommentMapper } from './dto/mapper';
import { CommentReqDto } from './dto/req-dto';

@ApiTags("CMS/Comment")
@Controller('cms/comment')
export class CommentController {
    service: GenericService;
    constructor(private connection: Connection) {
        this.service = new GenericService(this.connection, CommentMapper, CommentReqDto, CommentEntity);
    }

    @Post()
    async create(@Body() dto: CommentReqDto, @Req() req: any) {
        const userId = req.headers["user_id"];
        const organizationId = req.headers["organization_id"];
        dto.created_by = userId;

        const comment = await this.service.create(dto);

        console.log(dto);
        if (dto.parent_id) {
            const comment = await this.connection.getRepository(CommentEntity).findOne(dto.parent_id);
            dto.product_id = comment.productId;
            dto.project_id = comment.projectId;
            dto.post_id = comment.postId;
        }
        if (dto.product_id) {

            const product = await this.connection.getRepository(ProductEntity).findOne(dto.product_id);

            const notification = new NotificationEntity();
            notification.notificationType =
                product.isBuyHire === 1
                    ? NotificationType.CommentProductBuy
                    : NotificationType.CommentProductSell;
            notification.organizationId = product.organizationId;
            notification.product = product;
            notification.userId = userId;
            notification.name = comment.content;

            console.log(notification);

            await this.connection.getRepository(NotificationEntity).save(notification);
        }

        return comment;
    }

    @Get(":post_id")
    async findAll(@Param("post_id") postId: string) {
        const condition = { relations: ["children"], where: { postId, parentId: null } }
        return this.service.findAll(condition);
    }

    @Put(':id')
    put(@Param("id") id: string, @Body() dto: CommentReqDto) {
        return this.service.update(id, dto);
    }

    @Delete(':id')
    delete(@Param("id") id: string) {
        return this.service.delete(id);
    }
}
