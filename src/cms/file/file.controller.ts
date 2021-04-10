import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { GenericService } from 'src/common/generic.service';
import { FileEntity } from 'src/database.module/entities';
import { CategoryEntity } from 'src/database.module/entities/category.entity';
import { Connection } from 'typeorm';
import { FileMapper } from './dto/mapper';
import { FileReqDto} from './dto/req-dto';

@ApiTags("CMS/File")
@Controller('cms/file')
export class FileController {
    service
    constructor(private connection: Connection) {
        this.service = new GenericService(this.connection, FileMapper, FileReqDto, FileEntity);
     }

    @Post()
    async create(@Body() dto:FileReqDto) {
        return this.service.create(dto);
    }

    @Get()
    async findAll() {
        return this.service.findAll();
    }

    @Put(':id')
    put(@Param("id") id: string, @Body() dto: FileReqDto) {
        return this.service.put(id, dto);
    }

    @Delete(':id')
    delete(@Param("id") id: string) {
        return this.service.delete(id);
    }
 }
