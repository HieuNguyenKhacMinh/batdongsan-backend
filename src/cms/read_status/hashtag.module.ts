
import { Module } from '@nestjs/common';
import { ReadStatusController } from './hashtag.controller';

@Module({
    imports: [],
    controllers: [
        ReadStatusController, ],
    providers: [],
})
export class ReadStatusModule {}
