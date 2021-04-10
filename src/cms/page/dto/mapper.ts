import { IMapperFactory } from "src/common/interfaces/mapper.interface";
import { PageEntity } from "src/database.module/entities";
import { CategoryEntity } from "src/database.module/entities/category.entity";
import { PageReqDto } from "./req-dto";
import { PageResDto } from "./res-dto";

export class PageMapper implements IMapperFactory {
    mapReq(entity: PageEntity, req: PageReqDto) {
        if (!entity) entity = new CategoryEntity();
        entity.name = req.name;
        entity.description = req.description;
        return entity;
    }
    mapRes(res:PageResDto, entity: PageEntity) {
        if (!res) res = new PageResDto();
        res.id = entity.id;
        res.name = entity.name;
        res.description = entity.description;
        return res;
    }

}