import { PostMapper } from 'src/cms/post/dto/mapper';
import { WishlistEntity } from '../../../database.module/entities/wishlist.entity';
import { UserMapper } from '../../../identity/user/dto/mapper';
import { IMapperFactory } from "src/common/interfaces/mapper.interface";
import { WishlistReqDto } from "./req-dto";
import { WishlistResDto } from "./res-dto";
import { ProductMapper } from 'src/cms/product/dto/mapper';
import { ENOBUFS } from 'constants';
import { ProjectMapper } from 'src/cms/project/dto/mapper';

export class WishlistMapper implements IMapperFactory {
    mapReq(entity: WishlistEntity, req: WishlistReqDto) {
        if (!entity) entity = new WishlistEntity();
        entity.userId = req.user_id
        entity.productId = req.product_id;
        entity.postId = req.post_id;
        entity.deleteFlag = req.delete_flag;
        entity.projectId = req.project_id;
        return entity;
    }
    mapRes(res: WishlistResDto, entity: WishlistEntity) {
        if (!res) res = new WishlistResDto();
        res.id = entity.id;
        res.delete_flag = entity.deleteFlag;
        res.user = entity.user ? new UserMapper().mapRes(undefined, entity.user) : undefined;
        res.product_id = entity.productId;
        res.product = entity.product ? new ProductMapper().mapRes(undefined, entity.product) : undefined;
        res.post_id = entity.postId;
        res.post = entity.post ? new PostMapper().mapRes(undefined, entity.post) : undefined;
        res.project_id = entity.projectId;
        res.project = entity.project ? new ProjectMapper().mapRes(undefined, entity.project) : undefined;
        return res;
    }

}