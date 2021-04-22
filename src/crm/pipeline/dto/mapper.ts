
import { IMapperFactory } from "src/common/interfaces/mapper.interface";
import { OpportunityMapper } from "src/crm/opportunity/dto/mapper";
import { OrganizationMapper } from "src/crm/organization/dto/mapper";
import { PipelineEntity } from "src/database.module/entities";
import { AddressMapper } from "src/master-data/address/dto/mapper";
import { PipelineReqDto } from "./req-dto";
import { PipelineResDto } from "./res-dto";

export class PipelineMapper implements IMapperFactory {
    mapReq(entity: PipelineEntity, req: PipelineReqDto) {
        if (!entity) entity = new PipelineEntity();
        entity.description = req.description;
        entity.name = req.name;
        entity.order = req.order;
        entity.organizationId = req.organization_id;
        return entity;
    }
    mapRes(res: PipelineResDto, entity: PipelineEntity) {
        if (!res) res = new PipelineResDto();
        res.id = entity.id;
        res.description = entity.description;
        res.name = entity.name;
        res.order = entity.order;
        res.organization_id = entity.organizationId;
        res.organization = entity.organization ? new OrganizationMapper().mapRes(undefined, entity.organization) : undefined;
        res.opportunities = entity.opportunities ?
            entity.opportunities.map(o => new OpportunityMapper().mapRes(undefined, o)) : [];
        return res;
    }

}