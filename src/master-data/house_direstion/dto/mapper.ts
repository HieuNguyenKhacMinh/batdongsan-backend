import { IMapperFactory } from "src/common/interfaces/mapper.interface";
import { HouseDirestionEntity } from "src/database.module/entities";
import { HouseDirestionReqDto } from "./req-dto";
import { HouseDirestionResDto } from "./res-dto";

export class HouseDirestionMapper implements IMapperFactory {
    mapReq(entity: HouseDirestionEntity, req: HouseDirestionReqDto) {
        if (!entity) entity = new HouseDirestionEntity();
        entity.name = req.name;
        entity.description = req.description;
        return entity;
    }
    mapRes(res: HouseDirestionResDto, entity: HouseDirestionEntity) {
        if (!res) res = new HouseDirestionResDto();
        res.id = entity.id;
        res.name = entity.name;
        res.description = entity.description;
        return res;
    }

}
