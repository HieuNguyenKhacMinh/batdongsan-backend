import { PostMapper } from 'src/cms/post/dto/mapper';
import { UserMapper } from 'src/identity/user/dto/mapper';
import { OrganizationMapper } from "src/crm/organization/dto/mapper";
import { IMapperFactory } from "src/common/interfaces/mapper.interface";
import {  LeadEntity } from "src/database.module/entities";
import { LeadReqDto } from "./req-dto";
import { LeadResDto } from "./res-dto";
import { EINPROGRESS } from "constants";
import { ProjectMapper } from 'src/cms/project/dto/mapper';
import { ProductMapper } from 'src/cms/product/dto/mapper';
import { ContactMapper } from 'src/crm/contact/dto/mapper';

export class LeadMapper implements IMapperFactory {
    mapReq(entity: LeadEntity, req: LeadReqDto) {
        if (!entity) entity = new LeadEntity();
        entity.firsName = req.firsname;
        entity.sureName = req.surename;
        entity.otherDetails = req.otherdetails;
        entity.organizationId = req.organization_id;
        entity.userId = req.user_id;
        entity.productId = req.product_id;
        entity.projectId = req.project_id;
        entity.contactId = req.contact_id;
        entity.postId = req.post_id;
        return entity;
    }
    mapRes(res:LeadResDto, entity: LeadEntity) {
        if (!res) res = new LeadResDto();
        res.id = entity.id;
        res.firsname = entity.firsName;
        res.surename = entity.sureName;
        res.otherdetails = entity.otherDetails;
        res.organization_id = entity.organizationId;
        res.organization = entity.organization? new OrganizationMapper().mapRes(undefined, entity.organization): undefined;
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
        return res;
    }

}