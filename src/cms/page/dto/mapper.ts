import { IMapperFactory } from "src/common/interfaces/mapper.interface";
import { PageEntity } from "src/database.module/entities";
import { PageReqDto } from "./req-dto";
import { PageResDto } from "./res-dto";

export class PageMapper implements IMapperFactory {
    mapReq(entity: PageEntity, req: PageReqDto) {
        if (!entity) entity = new PageEntity();
        entity.name = req.name;
        entity.slug = req.slug;
        entity.description = req.description;
        return entity;
    }
    mapRes(res:PageResDto, entity: PageEntity) {
        if (!res) res = new PageResDto();
        res.id = entity.id;
        res.name = entity.name;
        res.slug = entity.slug;
        res.description = entity.description;
        return res;
    }

}