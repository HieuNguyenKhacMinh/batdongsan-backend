
import { Module } from '@nestjs/common';
import { NotificationTypeController } from './notification_type.controller';

@Module({
    imports: [],
    controllers: [
        NotificationTypeController, ],
    providers: [],
})
export class NotificationTypeModule {}
