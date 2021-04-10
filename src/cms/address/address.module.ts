import { AddressController } from './address.controller';
import { Module } from '@nestjs/common';

@Module({
    imports: [],
    controllers: [
       AddressController, ],
    providers: [],
})
export class AddressModule {}
