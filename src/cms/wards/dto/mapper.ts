import { IMapperFactory } from "src/common/interfaces/mapper.interface";
import { WardsEntity } from "src/database.module/entities";
import { WardsReqDto } from "./req-dto";
import { WardsResDto } from "./res-dto";

export class WardsMapper implements IMapperFactory {
    mapReq(entity: WardsEntity, req: WardsReqDto) {
        if (!entity) entity = new WardsEntity();
        entity.name = req.name;
        entity.description = req.description;
        entity.districtId = req.district_id;
        return entity;
    }
    mapRes(res:WardsResDto, entity: WardsEntity) {
        if (!res) res = new WardsResDto();
        res.id = entity.id;
        res.name = entity.name;
        res.description = entity.description;
        res.district_id = entity.districtId;
        return res;
    }

}