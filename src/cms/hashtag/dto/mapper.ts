import { IMapperFactory } from "src/common/interfaces/mapper.interface";
import { HashtagEntity } from "src/database.module/entities";
import { HashtagReqDto } from "./req-dto";
import { HashtagResDto } from "./res-dto";

export class HashtagMapper implements IMapperFactory {
    mapReq(entity: HashtagEntity, req: HashtagResDto) {
        if (!entity) entity = new HashtagEntity();
        entity.name = req.name;
        entity.description = req.description;
        return entity;
    }
    mapRes(res:HashtagResDto, entity: HashtagEntity) {
        if (!res) res = new HashtagResDto();
        res.id = entity.id;
        res.name = entity.name;
        res.description = entity.description;
        return res;
    }

}