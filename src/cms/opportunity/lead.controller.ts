import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { GenericService } from 'src/common/generic.service';
import { OpportunityEntity } from 'src/database.module/entities/Opportunity.entity';
import { Connection } from 'typeorm';
import { OpportunityMapper } from './dto/mapper';
import { OpportunityReqDto } from './dto/req-dto';

@ApiTags("CMS/Opportunity")
@Controller('cms/opportunity')
export class OpportunityController {
    service
    constructor(private connection: Connection) {
        this.service = new GenericService(this.connection, OpportunityMapper, OpportunityReqDto, OpportunityEntity);
     }

    @Post()
    async create(@Body() dto: OpportunityReqDto) {
        return this.service.create(dto);
    }

    @Get()
    async findAll() {
        const condition = { relations: ["organization"], where: {} };
        return this.service.findAll(condition);
    }

    @Put(':id')
    put(@Param("id") id: string, @Body() dto: OpportunityReqDto) {
        return this.service.update(id, dto);
    }

    @Delete(':id')
    delete(@Param("id") id: string) {
        return this.service.delete(id);
    }
 }
