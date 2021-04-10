import { IMapperFactory } from "src/common/interfaces/mapper.interface";
import { CategoryEntity } from "src/database.module/entities/category.entity";
import { CategoryReqDto } from "./req-dto";
import { CategoryResDto } from "./res-dto";

export class CategoryMapper implements IMapperFactory {
    mapReq(entity: CategoryEntity, req: CategoryResDto) {
        if (!entity) entity = new CategoryEntity();
        entity.name = req.name;
        entity.description = req.description;
        return entity;
    }
    mapRes(res: CategoryResDto, entity: CategoryEntity) {
        if (!res) res = new CategoryResDto();
        res.id = entity.id;
        res.name = entity.name;
        res.description = entity.description;
        return res;
    }

}
