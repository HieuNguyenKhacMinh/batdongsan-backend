import { IMapperFactory } from "src/common/interfaces/mapper.interface";
import { ReadStatusEntity } from "src/database.module/entities";
import { ReadStatusReqDto } from "./req-dto";
import { ReadStatusResDto } from "./res-dto";

export class ReadStatusMapper implements IMapperFactory {
    mapReq(entity: ReadStatusEntity, req: ReadStatusResDto) {
        if (!entity) entity = new ReadStatusEntity();
        entity.name = req.name;
        entity.description = req.description;
        return entity;
    }
    mapRes(res:ReadStatusResDto, entity: ReadStatusEntity) {
        if (!res) res = new ReadStatusResDto();
        res.id = entity.id;
        res.name = entity.name;
        res.description = entity.description;
        return res;
    }

}