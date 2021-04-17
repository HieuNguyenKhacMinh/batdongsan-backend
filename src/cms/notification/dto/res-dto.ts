import { NotificationTypeResDto } from "src/cms/notification_type/dto/res-dto";

export class NotificationResDto {
    id: string;
    name: string;
    description: string;
    notification_type_id: string;
    notification_type: NotificationTypeResDto;
}