import { IMapperFactory } from "src/common/interfaces/mapper.interface";
import { FormalityEntity } from "src/database.module/entities";
import { FormalityReqDto } from "./req-dto";
import { FormalityResDto } from "./res-dto";

export class FormalityMapper implements IMapperFactory {
    mapReq(entity: FormalityEntity, req: FormalityReqDto) {
        if (!entity) entity = new FormalityEntity();
        entity.name = req.name;
        entity.description = req.description;
        return entity;
    }
    mapRes(res:FormalityResDto, entity: FormalityEntity) {
        if (!res) res = new FormalityResDto();
        res.id = entity.id;
        res.name = entity.name;
        res.description = entity.description;
        return res;
    }

}