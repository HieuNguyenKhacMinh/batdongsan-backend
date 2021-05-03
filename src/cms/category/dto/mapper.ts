import { PostMapper } from "src/cms/post/dto/mapper";
import { IMapperFactory } from "src/common/interfaces/mapper.interface";
import { CategoryEntity } from "src/database.module/entities/category.entity";
import { CategoryReqDto } from "./req-dto";
import { CategoryResDto } from "./res-dto";

export class CategoryMapper implements IMapperFactory {
    mapReq(entity: CategoryEntity, req: CategoryReqDto) {
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
        console.log(entity.posts);
        
        res.posts = entity.posts ? entity.posts.map(p => new PostMapper().mapRes(undefined, p)): undefined;
        return res;
    }

}
