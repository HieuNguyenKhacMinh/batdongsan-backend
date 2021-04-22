import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { GenericService } from 'src/common/generic.service';
import { AddressEntity, PipelineEntity } from 'src/database.module/entities';
import { AddressMapper } from 'src/master-data/address/dto/mapper';
import { AddressReqDto } from 'src/master-data/address/dto/req-dto';
import { Connection } from 'typeorm';
import { PipelineMapper } from './dto/mapper';
import { PipelineReqDto } from './dto/req-dto';

@ApiTags("CMS/Pipeline")
@Controller('cms/pipeline')
export class PipelineController {
    service: GenericService;
    addressService: GenericService;
    constructor(private connection: Connection) {
        this.service = new GenericService(this.connection, PipelineMapper, PipelineReqDto, PipelineEntity);
        this.addressService = new GenericService(this.connection, AddressMapper, AddressReqDto, AddressEntity);
    }

    @Post()
    async create(@Body() dto: PipelineReqDto, @Body() addressDto: AddressReqDto) {
        return this.service.create(dto);
    }

    @Get(":organizationId")
    async findAll(@Param("organizationId") organizationId: string) {
        if (!organizationId) {
            throw new HttpException("organizationId is required", HttpStatus.BAD_REQUEST);
        }
        const condition = { relations: ["organization", "opportunities"], where: { organizationId } };
        return this.service.findAll(condition);
    }


    @Put(':id')
    put(@Param("id") id: string, @Body() dto: PipelineReqDto) {
        return this.service.update(id, dto);
    }

    @Delete(':id')
    delete(@Param("id") id: string) {
        return this.service.delete(id);
    }
}
