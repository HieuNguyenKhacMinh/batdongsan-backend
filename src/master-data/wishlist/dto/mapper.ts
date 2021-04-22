import { WishlistEntity } from './../../../database.module/entities/wishlist.entity';
import { UserMapper } from './../../../crm/user/dto/mapper';
import { IMapperFactory } from "src/common/interfaces/mapper.interface";
import { WishlistReqDto } from "./req-dto";
import { WishlistResDto } from "./res-dto";
import { ProductMapper } from 'src/cms/product/dto/mapper';

export class WishlistMapper implements IMapperFactory {
    mapReq(entity: WishlistEntity, req: WishlistReqDto) {
        if (!entity) entity = new WishlistEntity();
        req.product_id = entity.productId;
        req.user_id = entity.userId;
        return entity;
    }
    mapRes(res: WishlistResDto, entity: WishlistEntity) {
        if (!res) res = new WishlistResDto();
        res.id = entity.id;
        res.user = entity.user ? new UserMapper().mapRes(undefined, entity.user) : undefined;
        res.product_id = entity.productId;
        res.product = entity.product ? new ProductMapper().mapRes(undefined, entity.product) : undefined;
        return res;
    }

}