import { CountryController } from './country.controller';
import { Module } from '@nestjs/common';

@Module({
    imports: [],
    controllers: [
        CountryController, ],
    providers: [],
})
export class CountryModule {}
