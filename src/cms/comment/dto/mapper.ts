import { IMapperFactory } from "src/common/interfaces/mapper.interface";
import { CommentEntity } from "src/database.module/entities";
import { CategoryEntity } from "src/database.module/entities/category.entity";
import { CommentReqDto } from "./req-dto";
import { CommentResDto } from "./res-dto";

export class CommentMapper implements IMapperFactory {
    mapReq(entity: CommentEntity, req: CommentReqDto) {
        if (!entity) entity = new CommentEntity();
        entity.content = req.content;
        return entity;
    }
    mapRes(res:CommentResDto, entity: CommentEntity) {
        if (!res) res = new CommentResDto();
        res.id = entity.id;
        res.content = entity.content;
        return res;
    }

}