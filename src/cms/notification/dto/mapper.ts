import { OrganizationMapper } from './../../../crm/organization/dto/mapper';
import { WishlistMapper } from './../../../master-data/wishlist/dto/mapper';
import { LeadMapper } from './../../../crm/lead/dto/mapper';
import { ContactMapper } from './../../../crm/contact/dto/mapper';
import { NotificationTypeMapper } from "src/cms/notification_type/dto/mapper";
import { PostMapper } from "src/cms/post/dto/mapper";
import { ProductMapper } from "src/cms/product/dto/mapper";
import { ProjectMapper } from "src/cms/project/dto/mapper";
import { IMapperFactory } from "src/common/interfaces/mapper.interface";
import { UserMapper } from "src/identity/user/dto/mapper";
import { NotificationEntity } from "src/database.module/entities";
import { NotificationReqDto } from "./req-dto";
import { NotificationResDto } from "./res-dto";
import { OpportunityMapper } from 'src/crm/opportunity/dto/mapper';

export class NotificationMapper implements IMapperFactory {
    mapReq(entity: NotificationEntity, req: NotificationReqDto) {
        if (!entity) entity = new NotificationEntity();
        entity.name = req.name;
        entity.description = req.description;
        entity.notificationTypeId = req.notification_type_id;
        entity.userId = req.user_id;
        entity.productId = req.product_id;
        entity.projectId = req.project_id;
        entity.contactId = req.contact_id;
        entity.postId = req.post_id;
        entity.leadId = req.lead_id;
        entity.organizationId = req.organization_id;
        entity.wishlistId = req.wishlist_id;
        entity.opportunityId = req.opportunity_id;
        return entity;
    }
    mapRes(res:NotificationResDto, entity: NotificationEntity) {
        if (!res) res = new NotificationResDto();
        res.id = entity.id;
        res.name = entity.name;
        res.description = entity.description;
        res.notification_type_id = entity.notificationTypeId;
        res.notification_type = entity.notificationType ? new NotificationTypeMapper().mapRes(undefined, entity.notificationType): undefined;
        res.user_id = entity.userId;
        res.user = entity.user? new UserMapper().mapRes(undefined, entity.user): undefined;
        res.project_id = entity.projectId;
        res.project = entity.project? new ProjectMapper().mapRes(undefined, entity.project): undefined;
        res.product_id = entity.productId;
        res.product = entity.product? new ProductMapper().mapRes(undefined, entity.product): undefined;
        res.post_id = entity.postId;
        res.post = entity.post? new PostMapper().mapRes(undefined, entity.post): undefined;
        res.contact_id = entity.contactId;
        res.contact = entity.contact? new ContactMapper().mapRes(undefined, entity.contact): undefined;
        res.lead_id = entity.leadId;
        res.lead = entity.lead? new LeadMapper().mapRes(undefined, entity.lead): undefined;
        res.opportunity_id = entity.opportunityId;
        res.opportunity = entity.opportunity? new OpportunityMapper().mapRes(undefined, entity.opportunity): undefined;
        res.wishlist_id = entity.wishlistId;
        res.wishlist = entity.wishlist? new WishlistMapper().mapRes(undefined, entity.wishlist): undefined;
        res.organization_id = entity.organizationId;
        res.organization = entity.organization? new OrganizationMapper().mapRes(undefined, entity.organization): undefined;
        return res;
    }

}