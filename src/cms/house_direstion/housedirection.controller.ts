import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { GenericService } from 'src/common/generic.service';
import { HouseDirestionEntity } from 'src/database.module/entities';
import { CategoryEntity } from 'src/database.module/entities/category.entity';
import { Connection } from 'typeorm';
import { HouseDirestionMapper } from './dto/mapper';
import { HouseDirestionReqDto} from './dto/req-dto';

@ApiTags("CMS/HouseDirestion")
@Controller('cms/house-direstion')
export class HouseDirestionController {
    service
    constructor(private connection: Connection) {
        this.service = new GenericService(this.connection, HouseDirestionMapper, HouseDirestionReqDto, HouseDirestionEntity);
     }

    @Post()
    async create(@Body() dto:HouseDirestionReqDto) {
        return this.service.create(dto);
    }

    @Get()
    async findAll() {
        return this.service.findAll();
    }

    @Put(':id')
    put(@Param("id") id: string, @Body() dto: HouseDirestionReqDto) {
        return this.service.put(id, dto);
    }

    @Delete(':id')
    delete(@Param("id") id: string) {
        return this.service.delete(id);
    }
 }
