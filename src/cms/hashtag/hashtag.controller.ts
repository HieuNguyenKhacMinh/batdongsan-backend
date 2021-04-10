import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { GenericService } from 'src/common/generic.service';
import { HashtagEntity } from 'src/database.module/entities';
import { CategoryEntity } from 'src/database.module/entities/category.entity';
import { Connection } from 'typeorm';
import { HashtagMapper } from './dto/mapper';
import { HashtagReqDto} from './dto/req-dto';

@ApiTags("CMS/Hashtag")
@Controller('cms/hashtag')
export class HashtagController {
    service
    constructor(private connection: Connection) {
        this.service = new GenericService(this.connection, HashtagMapper, HashtagReqDto, HashtagEntity);
     }

    @Post()
    async create(@Body() dto:HashtagReqDto) {
        return this.service.create(dto);
    }

    @Get()
    async findAll() {
        return this.service.findAll();
    }

    @Put(':id')
    put(@Param("id") id: string, @Body() dto: HashtagReqDto) {
        return this.service.put(id, dto);
    }

    @Delete(':id')
    delete(@Param("id") id: string) {
        return this.service.delete(id);
    }
 }
