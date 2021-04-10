import { IMapperFactory } from "src/common/interfaces/mapper.interface";
import { ReadStatusEntity } from "src/database.module/entities";
import { StatusReqDto } from "./req-dto";
import { StatusResDto } from "./res-dto";

export class StatusMapper implements IMapperFactory {
    mapReq(entity: ReadStatusEntity, req: StatusReqDto) {
        if (!entity) entity = new ReadStatusEntity();
        entity.name = req.name;
        entity.description = req.description;
        return entity;
    }
    mapRes(res: StatusResDto, entity: ReadStatusEntity) {
        if (!res) res = new StatusResDto();
        res.id = entity.id;
        res.name = entity.name;
        res.description = entity.description;
        return res;
    }
}