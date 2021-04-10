import { PostController } from './post.controller';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HashtagEntity, PostEntity } from 'src/database.module/entities';

@Module({
    imports: [TypeOrmModule.forFeature([PostEntity, HashtagEntity])],
    controllers: [
        PostController, ],
    providers: [],
})
export class PostModule {}
