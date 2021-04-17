
import { IMapperFactory } from "src/common/interfaces/mapper.interface";
import { TableConfigEntity } from "src/database.module/entities/table_config.entity";
import { TableConfigReqDto } from "./req-dto";
import { TableConfigResDto } from "./res-dto";


export class TableConfigMapper implements IMapperFactory {
    mapReq(entity: TableConfigEntity, req: TableConfigReqDto) {
        if (!entity) entity = new TableConfigEntity();
        entity.name = req.name;
        entity.content = req.content;
        return entity;
    }
    mapRes(res: TableConfigResDto, entity: TableConfigEntity) {
        if (!res) res = new TableConfigResDto();
        res.id = entity.id;
        res.name = entity.name;
        res.content = entity.content;
        return res;
    }

}
