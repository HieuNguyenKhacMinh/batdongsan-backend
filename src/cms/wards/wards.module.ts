import { WardsController } from './wards.controller';
import { Module } from '@nestjs/common';

@Module({
    imports: [],
    controllers: [
       WardsController, ],
    providers: [],
})
export class WardsModule {}
