import { FormalityMapper } from "src/master-data/formality/dto/mapper";
import { IMapperFactory } from "src/common/interfaces/mapper.interface";
import { ProjectTypeEntity } from "src/database.module/entities/project_type.entity";
import { ProjectTypeResDto } from "./res-dto";
import { ProjectMapper } from "src/cms/project/dto/mapper";
import { ProjectTypeReqDto } from "./req-dto";

export class ProjectTypeMapper implements IMapperFactory {
    mapReq(entity: ProjectTypeEntity, req: ProjectTypeReqDto) {
        if (!entity) entity = new ProjectTypeEntity();
        entity.name = req.name;
        entity.description = req.description;
        return entity;
    }
    mapRes(res: ProjectTypeResDto, entity: ProjectTypeEntity) {
        if (!res) res = new ProjectTypeResDto();
        res.id = entity.id;
        res.name = entity.name;
        res.description = entity.description;
        res.projects = entity.projects? entity.projects.map(project => 
            new ProjectMapper().mapRes(undefined, project)): undefined;
        return res;
    }
}
