import { LeadEntity, NotificationEntity, PostEntity, ProductEntity, ProjectEntity } from 'src/database.module/entities';
import { WishlistEntity } from '../../database.module/entities/wishlist.entity';
import { Body, Controller, Delete, Get, Param, Post, Put, Req } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { GenericService } from 'src/common/generic.service';
import { Connection } from 'typeorm';
import { WishlistMapper } from './dto/mapper';
import { WishlistReqDto } from './dto/req-dto';
import { NotificationType } from 'src/common/enums';



@ApiTags("CMS/Wishlist")
@Controller('cms/wishlist')
export class WishlistController {
    service: GenericService;
    constructor(private connection: Connection) {
        this.service = new GenericService(this.connection, WishlistMapper, WishlistReqDto, WishlistEntity);
    }

    @Post()
    async create(@Body() dto: WishlistReqDto, @Req() req: any) {
        const userId = req.headers["user_id"];
        const organizationId = req.headers["organization_id"];
        dto.user_id = userId;
        if (dto.post_id) {
            const wistlistResDto: any = await this.service.findOneWithoutDeleteFlag({
                where: { userId, postId: dto.post_id }
            })
            if (wistlistResDto) {
                wistlistResDto.delete_flag = wistlistResDto.delete_flag === 1 ? 0 : 1;
                dto.delete_flag = wistlistResDto.delete_flag;
                await this.service.update(wistlistResDto.id, dto);
                return wistlistResDto;
            } else {
                const wishlist = await this.service.create(dto);

                // add to lead of organization
                const lead = new LeadEntity();

                // notification to organization

                const post = await this.connection.getRepository(PostEntity).findOne(dto.post_id);

                const notification = new NotificationEntity();
                notification.notificationType =
                    NotificationType.WishlistPost;
                notification.organizationId = post.organizationId;
                notification.post = post;
                notification.userId = userId;
                notification.name = '';

                await this.connection.getRepository(NotificationEntity).save(notification);

                return wishlist;
            }
        }
        if (dto.project_id) {
            const wistlistResDto: any = await this.service.findOneWithoutDeleteFlag({
                where: { userId, projectId: dto.project_id }
            })
            // console.log(wistlistResDto);

            if (wistlistResDto) {
                wistlistResDto.delete_flag = wistlistResDto.delete_flag === 1 ? 0 : 1;
                dto.delete_flag = wistlistResDto.delete_flag;
                await this.service.update(wistlistResDto.id, dto);
                return wistlistResDto;
            } else {
                // console.log("created");

                const wishlist = await this.service.create(dto);

                // add to lead of organization
                const lead = new LeadEntity();

                // notification to organization

                const project = await this.connection.getRepository(ProjectEntity).findOne(dto.project_id);

                const notification = new NotificationEntity();
                notification.notificationType = NotificationType.WishListProject;
                notification.organizationId = project.organizationId;
                notification.project = project;
                notification.userId = userId;
                notification.name = '';

                const notify = await this.connection.getRepository(NotificationEntity).save(notification);
                // console.log(notify);

                return wishlist;
            }
        }
        if (dto.product_id) {

            const wistlistResDto: any = await this.service.findOneWithoutDeleteFlag({
                where: { userId, productId: dto.product_id }
            })
            if (wistlistResDto) {
                wistlistResDto.delete_flag = wistlistResDto.delete_flag === 1 ? 0 : 1;
                dto.delete_flag = wistlistResDto.delete_flag;
                await this.service.update(wistlistResDto.id, dto);
                return wistlistResDto;
            } else {
                const wishlist = await this.service.create(dto);

                // add to lead of organization
                const lead = new LeadEntity();

                // notification to organization

                const product = await this.connection.getRepository(ProductEntity).findOne(dto.product_id);

                const notification = new NotificationEntity();
                notification.notificationType =
                    product.isBuyHire === 1
                        ? NotificationType.WishListProductBuy
                        : NotificationType.WishlistProductSell;
                notification.organizationId = product.organizationId;
                notification.product = product;
                notification.userId = userId;
                notification.name = '';

                await this.connection.getRepository(NotificationEntity).save(notification);

                return wishlist;
            }
        }
        // post_id

    }

    @Get()
    async findAll(@Req() req: any) {
        const userId = req.headers["user_id"];
        const condition = { relations: ["user", "product", "post", "project"], where: { userId } };
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
