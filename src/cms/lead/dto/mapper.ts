import { IMapperFactory } from "src/common/interfaces/mapper.interface";
import {  LeadEntity } from "src/database.module/entities";
import { LeadReqDto } from "./req-dto";
import { LeadResDto } from "./res-dto";

export class LeadMapper implements IMapperFactory {
    mapReq(entity: LeadEntity, req: LeadReqDto) {
        if (!entity) entity = new LeadEntity();
        entity.firsName = req.firsname;
        entity.sureName = req.surename;
        entity.otherDetails = req.otherdetails;
        entity.organizationId = req.organization_id;
        return entity;
    }
    mapRes(res:LeadResDto, entity: LeadEntity) {
        if (!res) res = new LeadResDto();
        res.id = entity.id;
        res.firsname = entity.firsName;
        res.surename = entity.sureName;
        res.otherdetails = entity.otherDetails;
        res.organization_id = entity.organizationId;
        return res;
    }

}