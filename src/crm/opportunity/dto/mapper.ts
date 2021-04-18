import { OrganizationMapper } from "src/crm/organization/dto/mapper";
import { IMapperFactory } from "src/common/interfaces/mapper.interface";
import { OpportunityEntity } from "src/database.module/entities/opportunity.entity";
import { OpportunityReqDto } from "./req-dto";
import { OpportunityResDto } from "./res-dto";

export class OpportunityMapper implements IMapperFactory {
    mapReq(entity: OpportunityEntity, req: OpportunityReqDto) {
        if (!entity) entity = new OpportunityEntity();
        entity.firsName = req.firsname;
        entity.sureName = req.surename;
        entity.otherDetails = req.otherdetails;
        entity.organizationId = req.organization_id;
        return entity;
    }
    mapRes(res:OpportunityResDto, entity: OpportunityEntity) {
        if (!res) res = new OpportunityResDto();
        res.id = entity.id;
        res.firsname = entity.firsName;
        res.surename = entity.sureName;
        res.otherdetails = entity.otherDetails;
        res.organization_id = entity.organizationId;
        res.organization = entity.organization? new OrganizationMapper().mapRes(undefined, entity.organization): undefined;
        return res;
    }

}