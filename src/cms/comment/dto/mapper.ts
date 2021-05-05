import { UserMapper } from 'src/identity/user/dto/mapper';
import { IMapperFactory } from "src/common/interfaces/mapper.interface";
import { CommentEntity } from "src/database.module/entities";
import { CommentReqDto } from "./req-dto";
import { CommentResDto } from "./res-dto";

export class CommentMapper implements IMapperFactory {
    mapReq(entity: CommentEntity, req: CommentReqDto) {
        if (!entity) entity = new CommentEntity();
        entity.postId = req.post_id;
        entity.content = req.content;
        entity.parentId = req.parent_id;
        entity.createdBy = req.created_by;
        entity.productId = req.product_id;
        entity.projectId = req.project_id;
        return entity;
    }
    mapRes(res: CommentResDto, entity: CommentEntity) {
        // // console.log(entity);

        if (!res) res = new CommentResDto();
        res.id = entity.id;
        res.content = entity.content;
        res.post_id = entity.postId;
        res.created_date = entity.createdDate;
        res.product_id = entity.productId;
        res.project_id = entity.projectId;
        res.created_by = entity.createdBy;
        res.created_by_user = entity.createdByUser ? new UserMapper().mapRes(undefined, entity.createdByUser): undefined;
        res.children = entity.children ? entity.children.map(c => new CommentMapper().mapRes(undefined, c)) : undefined;
        return res;
    }

}