import { IMapperFactory } from "src/common/interfaces/mapper.interface";
import { ReportWidgetEntity } from "src/database.module/entities/report_widget.entity";
import { ReportWidgetReqDto } from "./req-dto";
import { ReportWidgetResDto } from "./res-dto";

export class ReportWidgetMapper implements IMapperFactory {
    mapReq(entity: ReportWidgetEntity, req: ReportWidgetReqDto) {
        if (!entity) entity = new ReportWidgetEntity();
        entity.name = req.name;
        entity.description = req.description;
        entity.data = req.data;
        entity.sql  = req.data;
        entity.dashboard_id = req.dashboard_id;
        return entity;
    }
    mapRes(res:ReportWidgetResDto, entity: ReportWidgetEntity) {
        if (!res) res = new ReportWidgetResDto();
        res.id = entity.id;
        res.name = entity.name;
        res.description = entity.description;
        res.sql = entity.sql;
        res.data = entity.data;
        res.dashoard_id = entity.dashboard_id;
        return res;
    }

}