import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { GenericService } from 'src/common/generic.service';
import { ProjectEntity } from 'src/database.module/entities';
import { Connection } from 'typeorm';
import { ProjectMapper } from './dto/mapper';
import { ProjectReqDto } from './dto/req-dto';

@ApiTags("CMS/Project")
@Controller('cms/project')
export class ProjectController {
    service
    constructor(private connection: Connection) {
        this.service = new GenericService(this.connection, ProjectMapper, ProjectReqDto, ProjectEntity);
     }

    @Post()
    async create(@Body() dto: ProjectReqDto) {
        return this.service.create(dto);
    }

    @Get()
    async findAll() {
        const condition = { relations: ["city"], where: {} };
        return this.service.findAll(condition);
    }

    @Put(':id')
    put(@Param("id") id: string, @Body() dto: ProjectReqDto) {
        return this.service.update(id, dto);
    }

    @Delete(':id')
    delete(@Param("id") id: string) {
        return this.service.delete(id);
    }
 }
