
import { Module } from '@nestjs/common';
import { HouseDirestionController } from './housedirection.controller';

@Module({
    imports: [],
    controllers: [
        HouseDirestionController, ],
    providers: [],
})
export class HouseDirestionTypeModule {}
