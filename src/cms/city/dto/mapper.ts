import { CountryMapper } from "src/cms/country/dto/mapper";
import { IMapperFactory } from "src/common/interfaces/mapper.interface";
import { CityEntity } from "src/database.module/entities";
import { ProvinceCityReqDto } from "./req-dto";
import { ProvinceCityResDto } from "./res-dto";

export class ProvinceCityMapper implements IMapperFactory {
    mapReq(entity: CityEntity, req: ProvinceCityReqDto) {
        if (!entity) entity = new CityEntity();
        entity.name = req.name;
        entity.description = req.description;
        entity.countryId = req.country_id;
        return entity;
    }
    mapRes(res: ProvinceCityResDto, entity: CityEntity) {
        if (!res) res = new ProvinceCityResDto();
        res.id = entity.id;
        res.name = entity.name;
        res.description = entity.description;
        res.country_id = entity.countryId;
        res.country = entity.country ? new CountryMapper().mapRes(undefined, entity.country): undefined;
        return res;
    }

}
