import { IMapperFactory } from "src/common/interfaces/mapper.interface";
import { NotificationTypeEntity } from "src/database.module/entities";
import { NotificationTypeReqDto } from "./req-dto";
import { NotificationTypeResDto } from "./res-dto";

export class NotificationTypeMapper implements IMapperFactory {
    mapReq(entity: NotificationTypeEntity, req: NotificationTypeResDto) {
        if (!entity) entity = new NotificationTypeEntity();
        entity.name = req.name;
        entity.description = req.description;
        return entity;
    }
    mapRes(res:NotificationTypeResDto, entity: NotificationTypeEntity) {
        if (!res) res = new NotificationTypeResDto();
        res.id = entity.id;
        res.name = entity.name;
        res.description = entity.description;
        return res;
    }

}