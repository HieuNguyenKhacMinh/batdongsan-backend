
import { Module } from '@nestjs/common';
import { ProductTypeController } from './product_type.controller';

@Module({
    imports: [],
    controllers: [
        ProductTypeController, ],
    providers: [],
})
export class ProductTypeTypeModule {}
