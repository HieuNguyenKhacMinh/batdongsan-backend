import { UserEntity } from 'src/database.module/entities/User.entity';
import { WishlistEntity } from '../../database.module/entities/wishlist.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WishlistController } from './wishlist.controller';
import { Module } from '@nestjs/common';

@Module({
    imports: [TypeOrmModule.forFeature([WishlistEntity, UserEntity])],
    controllers: [
       WishlistController, ],
    providers: [],
})
export class WishlistModule {}
