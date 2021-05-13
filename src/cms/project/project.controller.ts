import { Body, Controller, Delete, Get, Param, Post, Put, Req } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { GenericService } from 'src/common/generic.service';
import { FileEntity, ProjectEntity } from 'src/database.module/entities';
import { Connection } from 'typeorm';
import { ProjectMapper } from './dto/mapper';
import { ProjectReqDto } from './dto/req-dto';

@ApiTags("CMS/Project")
@Controller('cms/project')
export class ProjectController {
    service: GenericService;
    constructor(private connection: Connection) {
        this.service = new GenericService(this.connection, ProjectMapper, ProjectReqDto, ProjectEntity);
    }

    @Post()
    async create(@Body() dto: ProjectReqDto) {
        const project = await this.service.create(dto);

        await this.connection.getRepository(FileEntity).update({ id: dto.file_id },
            { projectId: project.id });
        return project;
    }

    @Get()
    async findAll(@Req() req: any) {
        const organizationId = req.headers["organization_id"];
        const condition = {
            relations: ["city", "country", "district", "wards", "address"
                , "projectType"], where: {}
        };
        let projects = await this.service.findAll(condition);

        // filter wishlist deleteFlag=  1
        projects = projects.map(p => {
            p.wishlists = p.wishlists.filter(w => w.delete_flag === 0);
            return p;
        })

        if (!organizationId) {
            return projects;
        }
        return projects.filter(p => p.organization_id === organizationId);
    }


    @Get(":id")
    async findOne(@Param("id") id: string) {
        const condition = {
            relations: ["comments", "comments.createdByUser",
                "comments.children", "comments.children.createdByUser","user"],
            where: { id }
        };
        return this.service.findOne(condition);
    }

    @Put(':id')
    async put(@Param("id") id: string, @Body() dto: ProjectReqDto) {
        const project: any = await this.service.update(id, dto);

        await this.connection.getRepository(FileEntity).update({ id: dto.file_id },
            { projectId: project.id });
        return project;
    }

    @Delete(':id')
    delete(@Param("id") id: string) {
        return this.service.delete(id);
    }
}
