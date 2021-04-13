import { ProductController } from './product.controller';
import { Module } from '@nestjs/common';

@Module({
    imports: [],
    controllers: [
        ProductController, ],
    providers: [],
})
export class ProductModule {}
