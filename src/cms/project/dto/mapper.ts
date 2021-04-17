import { ProvinceCityMapper } from "src/cms/city/dto/mapper";
import { IMapperFactory } from "src/common/interfaces/mapper.interface";
import { ProjectEntity } from "src/database.module/entities";
import { ProjectReqDto } from "./req-dto";
import { ProjectResDto } from "./res-dto";

export class ProjectMapper implements IMapperFactory {
    mapReq(entity: ProjectEntity, req: ProjectReqDto) {
        if (!entity) entity = new ProjectEntity();
        entity.name = req.name;
        entity.description = req.description;
        entity.cityId = req.city_id;
        return entity;
    }
    mapRes(res:ProjectResDto, entity: ProjectEntity) {
        if (!res) res = new ProjectResDto();
        res.id = entity.id;
        res.name = entity.name;
        res.description = entity.description;
        res.city_id = entity.cityId;
        res.city = entity.city? new ProvinceCityMapper().mapRes(undefined, entity.city): undefined;
        return res;
    }

}