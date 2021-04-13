import { Module } from '@nestjs/common';
import { PostStatusController } from './post_status.controller';

@Module({
    imports: [],
    controllers: [PostStatusController],
    providers: [],
})
export class PostStatusModule { }
