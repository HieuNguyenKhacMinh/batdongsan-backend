
import { Module } from '@nestjs/common';
import { ReadStatusController } from './read_status.controller';

@Module({
    imports: [],
    controllers: [
        ReadStatusController, ],
    providers: [],
})
export class ReadStatusModule {}
