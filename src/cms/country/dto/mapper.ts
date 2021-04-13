import { IMapperFactory } from "src/common/interfaces/mapper.interface";
import { CountryEntity } from "src/database.module/entities/country.entity";
import { CountryReqDto } from "./req-dto";
import { CountryResDto } from "./res-dto";

export class CountryMapper implements IMapperFactory {
    mapReq(entity: CountryEntity, req: CountryReqDto) {
        if (!entity) entity = new CountryEntity();
        entity.id = req.id;
        entity.name = req.name;
        entity.description = req.description;
        
        return entity;
    }
    mapRes(res:CountryResDto, entity: CountryEntity) {
        if (!res) res = new CountryResDto();
        res.id = entity.id;
        res.name = entity.name;
        res.description = entity.description;
        return res;
    }

}