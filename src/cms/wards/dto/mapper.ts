import { IMapperFactory } from "src/common/interfaces/mapper.interface";
import { WardsEntity } from "src/database.module/entities";
import { CategoryEntity } from "src/database.module/entities/category.entity";
import { WardsReqDto } from "./req-dto";
import { WardsResDto } from "./res-dto";

export class WardsMapper implements IMapperFactory {
    mapReq(entity: WardsEntity, req: WardsReqDto) {
        if (!entity) entity = new WardsEntity();
        entity.name = req.name;
        entity.description = req.description;
        return entity;
    }
    mapRes(res:WardsResDto, entity: WardsEntity) {
        if (!res) res = new WardsResDto();
        res.id = entity.id;
        res.name = entity.name;
        res.description = entity.description;
        return res;
    }

}