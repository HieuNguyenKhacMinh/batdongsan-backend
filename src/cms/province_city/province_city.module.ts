
import { Module } from '@nestjs/common';
import { ProvinceCityController } from './province_city.controller';

@Module({
    imports: [],
    controllers: [
        ProvinceCityController, ],
    providers: [],
})
export class ProvinceCityTypeModule {}
