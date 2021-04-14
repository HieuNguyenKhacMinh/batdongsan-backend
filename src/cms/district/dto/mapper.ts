import { ProvinceCityMapper } from "src/cms/city/dto/mapper";
import { IMapperFactory } from "src/common/interfaces/mapper.interface";
import { DistrictEntity } from "src/database.module/entities";
import { DistrictReqDto } from "./req-dto";
import { DistrictResDto } from "./res-dto";

export class DistrictMapper implements IMapperFactory {
    mapReq(entity: DistrictEntity, req: DistrictReqDto) {
        if (!entity) entity = new DistrictEntity();
        entity.name = req.name;
        entity.description = req.description;
        entity.cityId = req.city_id;
        return entity;
    }
    mapRes(res:DistrictResDto, entity: DistrictEntity) {
        if (!res) res = new DistrictResDto();
        res.id = entity.id;
        res.name = entity.name;
        res.city_id = entity.cityId;
        res.city = entity.city? new ProvinceCityMapper().mapRes(undefined, entity.city): undefined;;
        res.description = entity.description;
        return res;
    }

}