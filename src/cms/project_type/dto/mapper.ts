import { FormalityMapper } from "src/cms/formality/dto/mapper";
import { IMapperFactory } from "src/common/interfaces/mapper.interface";
import { ProjectTypeEntity } from "src/database.module/entities/project_type.entity";
import { ProjectTypeReqDto } from "./req-dto";
import { ProjectTypeResDto } from "./res-dto";

export class ProjectTypeMapper implements IMapperFactory {
    mapReq(entity: ProjectTypeEntity, req: ProjectTypeResDto) {
        if (!entity) entity = new ProjectTypeEntity();
        entity.name = req.name;
        entity.description = req.description;
        entity.formalityId = req.formality_id;
        return entity;
    }
    mapRes(res: ProjectTypeResDto, entity: ProjectTypeEntity) {
        if (!res) res = new ProjectTypeResDto();
        res.id = entity.id;
        res.name = entity.name;
        res.description = entity.description;
        res.formality_id = entity.formalityId;
        res.formality = entity.formality? new FormalityMapper().mapRes(undefined, entity.formality): undefined;
        return res;
    }

}
