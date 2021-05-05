import { WishlistMapper } from './../../../cms/wishlist/dto/mapper';
import { CategoryMapper } from "src/cms/category/dto/mapper";
import { CategoryResDto } from "src/cms/category/dto/res-dto";
import { HashtagMapper } from "src/cms/hashtag/dto/mapper";
import { PostStatusMapper } from "src/master-data/post_status/dto/mapper";
import { IMapperFactory } from "src/common/interfaces/mapper.interface";
import { PostEntity } from "src/database.module/entities";
import { PostReqDto } from "./req-dto";
import { PostResDto } from "./res-dto";
import { OrganizationMapper } from "src/crm/organization/dto/mapper";
import { CommentMapper } from "src/cms/comment/dto/mapper";
import { FileMapper } from 'src/cms/file/dto/mapper';

export class PostMapper implements IMapperFactory {
    mapReq(entity: PostEntity, req: PostReqDto) {
        if (!entity) entity = new PostEntity();
        entity.title = req.title;
        entity.content = req.content;
        entity.categoryId = req.category_id;
        entity.statusId = req.status_id;
        entity.widgetId = req.widget_id;
        entity.pageId = req.page_id;
        entity.subContent = req.sub_content;
        entity.organizationId = req.organization_id;
        entity.hashtags = req.hashtags ? req.hashtags.map(tag => {
            return new HashtagMapper().mapReq(undefined, tag)
        }) : [];
        return entity;
    }
    mapRes(res: PostResDto, entity: PostEntity) {
        if (!res) res = new PostResDto();
        res.id = entity.id;
        res.title = entity.title;
        res.content = entity.content;
        res.category_id = entity.categoryId;
        res.category = entity.category ? new CategoryMapper().mapRes(undefined, entity.category) : undefined;
        res.status_id = entity.statusId;
        res.sub_content = entity.subContent;
        res.organization_id = entity.organizationId;
        res.organization = entity.organization ? new OrganizationMapper().mapRes(undefined, entity.organization) : undefined;
        res.status = entity.status ? new PostStatusMapper().mapRes(undefined, entity.status) : undefined;
        res.hashtags = entity.hashtags ? entity.hashtags.map(tag => {
            return new HashtagMapper().mapRes(undefined, tag)
        }) : [];
        res.comments = entity.comments ? entity.comments.map(comment =>
            new CommentMapper().mapRes(undefined, comment)
        ) : [];

        // console.log(entity.wishlists);
        
        res.wishlists = entity.wishlists ? entity.wishlists.map(wishlist =>
            new WishlistMapper().mapRes(undefined, wishlist)
        ) : [];

        res.files = entity.files ? entity.files.map(f =>
            new FileMapper().mapRes(undefined, f)
        ) : [];

        return res;
    }

}