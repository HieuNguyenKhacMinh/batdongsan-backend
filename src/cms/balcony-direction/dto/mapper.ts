import { IMapperFactory } from "src/common/interfaces/mapper.interface";
import { BalconydirectionEntity } from "src/database.module/entities";
import { BalconydirectionReqDto } from "./req-dto";
import { BalconydirectionResDto } from "./res-dto";

export class BalconydirectionMapper implements IMapperFactory {
    mapReq(entity: BalconydirectionEntity, req: BalconydirectionResDto) {
        if (!entity) entity = new BalconydirectionEntity();
        entity.name = req.name;
        entity.description = req.description;
        return entity;
    }
    mapRes(res: BalconydirectionResDto, entity: BalconydirectionEntity) {
        if (!res) res = new BalconydirectionResDto();
        res.id = entity.id;
        res.name = entity.name;
        res.description = entity.description;
        return res;
    }

}
