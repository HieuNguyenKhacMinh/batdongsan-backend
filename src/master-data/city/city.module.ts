
import { Module } from '@nestjs/common';
import { ProvinceCityController } from './city.controller';

@Module({
    imports: [],
    controllers: [
        ProvinceCityController, ],
    providers: [],
})
export class ProvinceCityTypeModule {}
