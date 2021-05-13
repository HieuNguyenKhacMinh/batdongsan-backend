import { Body, Controller, Delete, Get, Param, Post, Put, Req, } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { GenericService } from 'src/common/generic.service';
import { FileEntity, PostEntity } from 'src/database.module/entities';
import { Connection } from 'typeorm';
import { ConditionDto } from './dto/condition.dto';
import { PostMapper } from './dto/mapper';
import { PostReqDto } from './dto/req-dto';

@ApiTags("CMS/Posts")
@Controller("cms/posts")
export class PostController {
    service: GenericService;
    constructor(private connection: Connection) {
        this.service = new GenericService(this.connection, PostMapper, PostReqDto, PostEntity);
    }

    @Post()
    async create(@Body() dto: PostReqDto) {
        const post = await this.service.create(dto);
        await this.connection.getRepository(FileEntity).update({ id: dto.file_id },
            { postId: post.id });
        return post;
    }

    @Post('all')
    async findAll(@Body() dto: PostReqDto, @Req() req: any) {
        const organizationId = req.headers["organization_id"];
        const uerId = req.header["user_id"];
        dto.organization_id = organizationId;
        dto.user_id = uerId;
        const condition: any = { relations: ["category", "status", "organization", "files","user"], where: {} };
        if (organizationId) {
            condition.where = { organizationId };
        }
        if (dto.category_id) condition.where.categoryId = dto.category_id;
        if (dto.status) condition.where.statusId = dto.status;
        let posts = await this.service.findAll(condition);
        // filter wishlist deleteFlag=  1
        posts = posts.map(p => {
            p.wishlists = p.wishlists.filter(w => w.delete_flag === 0);
            return p;
        })

        return posts;

    }

    @Get(":id")
    async findOne(@Param("id") id: string) {
        const condition: any = {
            relations: ["category", "status", "organization", "comments", "comments.createdByUser",
                "comments.children", "comments.children.createdByUser", "files"], where: { id }
        };
        return this.service.findOne(condition);
    }

    @Put(':id')
    async put(@Param("id") id: string, @Body() dto: PostReqDto) {
        const post: any = await this.service.update(id, dto);
        await this.connection.getRepository(FileEntity).update({ id: dto.file_id },
            { postId: post.id });
        return post;
    }

    @Delete(':id')
    delete(@Param("id") id: string) {
        return this.service.delete(id);
    }
}
