import { NotificationTypeMapper } from "src/cms/notification_type/dto/mapper";
import { IMapperFactory } from "src/common/interfaces/mapper.interface";
import { NotificationEntity } from "src/database.module/entities";
import { NotificationReqDto } from "./req-dto";
import { NotificationResDto } from "./res-dto";

export class NotificationMapper implements IMapperFactory {
    mapReq(entity: NotificationEntity, req: NotificationReqDto) {
        if (!entity) entity = new NotificationEntity();
        entity.name = req.name;
        entity.description = req.description;
        entity.notificationTypeId = req.notification_type_id;
        return entity;
    }
    mapRes(res:NotificationResDto, entity: NotificationEntity) {
        if (!res) res = new NotificationResDto();
        res.id = entity.id;
        res.name = entity.name;
        res.description = entity.description;
        res.notification_type_id = entity.notificationTypeId;
        res.notification_type = entity.notificationType ? new NotificationTypeMapper().mapRes(undefined, entity.notificationType): undefined;
        return res;
    }

}