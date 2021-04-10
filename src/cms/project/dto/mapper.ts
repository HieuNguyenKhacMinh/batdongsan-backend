import { IMapperFactory } from "src/common/interfaces/mapper.interface";
import { ProjectEntity } from "src/database.module/entities";
import { ProjectReqDto } from "./req-dto";
import { ProjectResDto } from "./res-dto";

export class ProjectMapper implements IMapperFactory {
    mapReq(entity: ProjectEntity, req: ProjectReqDto) {
        if (!entity) entity = new ProjectEntity();
        entity.name = req.name;
        entity.description = req.description;
        return entity;
    }
    mapRes(res:ProjectResDto, entity: ProjectEntity) {
        if (!res) res = new ProjectResDto();
        res.id = entity.id;
        res.name = entity.name;
        res.description = entity.description;
        return res;
    }

}