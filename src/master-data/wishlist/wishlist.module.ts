import { WishlistController } from './wishlist.controller';
import { Module } from '@nestjs/common';

@Module({
    imports: [],
    controllers: [
       WishlistController, ],
    providers: [],
})
export class WishlistModule {}
