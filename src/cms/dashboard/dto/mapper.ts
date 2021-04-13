import { IMapperFactory } from "src/common/interfaces/mapper.interface";
import { DashboardEntity } from "src/database.module/entities/dashboard.entity";
import { DashboardReqDto } from "./req-dto";
import { DashboardResDto } from "./res-dto";

export class DashboardMapper implements IMapperFactory {
    mapReq(entity: DashboardEntity, req: DashboardReqDto) {
        if (!entity) entity = new DashboardEntity();
        entity.name = req.name;
        entity.description = req.description;
        return entity;
    }
    mapRes(res:DashboardResDto, entity: DashboardEntity) {
        if (!res) res = new DashboardResDto();
        res.id = entity.id;
        res.name = entity.name;
        res.description = entity.description;
        return res;
    }

}