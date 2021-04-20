import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { GenericService } from 'src/common/generic.service';
import { ProjectTypeEntity } from 'src/database.module/entities/project_type.entity';
import { Connection } from 'typeorm';
import { ProjectTypeMapper } from './dto/mapper';
import { ProjectTypeReqDto} from './dto/req-dto';

@ApiTags("CMS/ProjectType")
@Controller('cms/project-type')
export class ProjectTypeController {
    service
    constructor(private connection: Connection) {
        this.service = new GenericService(this.connection, ProjectTypeMapper, ProjectTypeReqDto, ProjectTypeEntity);
     }

    @Post()
    async create(@Body() dto:ProjectTypeReqDto) {
        return this.service.create(dto);
    }

    @Get()
    async findAll() {
        const condition = { relations: ["projects"], where: {} };
        return this.service.findAll(condition);
    }

    @Put(':id')
    put(@Param("id") id: string, @Body() dto: ProjectTypeReqDto) {
        return this.service.update(id, dto);
    }

    @Delete(':id')
    delete(@Param("id") id: string) {
        return this.service.delete(id);
    }
 }
