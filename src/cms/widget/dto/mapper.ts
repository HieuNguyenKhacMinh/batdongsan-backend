import { IMapperFactory } from "src/common/interfaces/mapper.interface";
import { OrganizationMapper } from "src/crm/organization/dto/mapper";
import { WidgetEntity } from "src/database.module/entities/Widget.entity";
import { WidgetReqDto } from "./req-dto";
import { WidgetResDto } from "./res-dto";

export class WidgetMapper implements IMapperFactory {
    mapReq(entity: WidgetEntity, req: WidgetReqDto) {
        if (!entity) entity = new WidgetEntity();
        entity.name= req.name;
        entity.description = req.description;
        entity.organizationId = req.organization_id;
        return entity;
    }
    mapRes(res:WidgetResDto, entity: WidgetEntity) {
        if (!res) res = new WidgetResDto();
        res.id = entity.id;
        res.name = entity.name;
        res.description = entity.description;
        res.organization_id = entity.organizationId;
        res.organization = entity.organization ? new OrganizationMapper().mapRes(undefined, entity.organization) : undefined;
        return res;
    }

}