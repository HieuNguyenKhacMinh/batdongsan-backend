import { IMapperFactory } from "src/common/interfaces/mapper.interface";
import { ProvinceCityEntity } from "src/database.module/entities/province_city.entity";
import { ProvinceCityReqDto } from "./req-dto";
import { ProvinceCityResDto } from "./res-dto";

export class ProvinceCityMapper implements IMapperFactory {
    mapReq(entity: ProvinceCityEntity, req: ProvinceCityResDto) {
        if (!entity) entity = new ProvinceCityEntity();
        entity.name = req.name;
        entity.description = req.description;
        return entity;
    }
    mapRes(res: ProvinceCityResDto, entity: ProvinceCityEntity) {
        if (!res) res = new ProvinceCityResDto();
        res.id = entity.id;
        res.name = entity.name;
        res.description = entity.description;
        return res;
    }

}
