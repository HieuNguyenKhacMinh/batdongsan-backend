import { IMapperFactory } from "src/common/interfaces/mapper.interface";
import { PostEntity } from "src/database.module/entities";
import { PostReqDto } from "./req-dto";
import { PostResDto } from "./res-dto";

export class PostMapper implements IMapperFactory {
    mapReq(entity: PostEntity, req: PostReqDto) {
        if (!entity) entity = new PostEntity();
        entity.title = req.title;
        entity.content = req.content;
        entity.categoryId = req.category_id;
        entity.statusId = req.status_id;
        return entity;
    }
    mapRes(res: PostResDto, entity: PostEntity) {
        if (!res) res = new PostResDto();
        res.id = entity.id;
        res.title = entity.title;
        res.content = entity.content;
        return res;
    }

}