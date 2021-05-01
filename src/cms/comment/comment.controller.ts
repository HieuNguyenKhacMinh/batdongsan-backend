import { Body, Controller, Delete, Get, Param, Post, Put, Req } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { GenericService } from 'src/common/generic.service';
import { CommentEntity } from 'src/database.module/entities';
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
        dto.created_by = userId;
        return this.service.create(dto);
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
