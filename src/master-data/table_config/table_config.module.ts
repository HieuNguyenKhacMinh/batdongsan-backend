import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TableConfigEntity } from 'src/database.module/entities/table_config.entity';
import { TableConfigController } from './table_config.controller';

@Module({
    imports: [TypeOrmModule.forFeature([TableConfigEntity])],
    controllers: [TableConfigController],
    providers: [],
})
export class TableConfigModule {}
