import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { GenericService } from 'src/common/generic.service';
import { CategoryEntity } from 'src/database.module/entities/category.entity';
import { Connection } from 'typeorm';
import { CategoryMapper } from './dto/mapper';
import { CategoryReqDto } from './dto/req-dto';

@ApiTags("CMS/Categories")
@Controller('cms/categories')
export class CategoryController {
    service: GenericService;
    constructor(private connection: Connection) {
        this.service = new GenericService(this.connection, CategoryMapper, CategoryReqDto, CategoryEntity);
    }

    @Post()
    async create(@Body() dto: CategoryReqDto) {
        return this.service.create(dto);
    }

    @Get()
    async findAll() {
        return this.service.findAll();
    }

    @Put(':id')
    put(@Param("id") id: string, @Body() dto: CategoryReqDto) {
        return this.service.update(id, dto);
    }

    @Delete(':id')
    delete(@Param("id") id: string) {
        return this.service.delete(id);
    }
}
