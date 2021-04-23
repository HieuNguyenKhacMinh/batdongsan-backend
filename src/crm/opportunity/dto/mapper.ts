import { CommentMapper } from 'src/cms/comment/dto/mapper';
import { ProjectMapper } from 'src/cms/project/dto/mapper';
import { OrganizationMapper } from "src/crm/organization/dto/mapper";
import { IMapperFactory } from "src/common/interfaces/mapper.interface";
import { OpportunityEntity } from "src/database.module/entities/opportunity.entity";
import { OpportunityReqDto } from "./req-dto";
import { OpportunityResDto } from "./res-dto";
import { ProductMapper } from "src/cms/product/dto/mapper";
import { PipelineMapper } from 'src/crm/pipeline/dto/mapper';

export class OpportunityMapper implements IMapperFactory {
    mapReq(entity: OpportunityEntity, req: OpportunityReqDto) {
        if (!entity) entity = new OpportunityEntity();
        entity.name = req.name;
        entity.description = req.description;
        entity.value = req.value;
        entity.unit = req.unit;
        entity.otherDetails = req.otherdetails;
        entity.organizationId = req.organization_id;
        entity.pipelineId = req.pipeline_id;
        entity.productId = req.product_id;
        entity.projectId = req.project_id;
        return entity;

    }
    mapRes(res: OpportunityResDto, entity: OpportunityEntity) {
        if (!res) res = new OpportunityResDto();
        res.id = entity.id;
        res.name = entity.name;
        res.description = entity.description;
        res.value = entity.value;
        res.unit = entity.unit;
        res.pipeline_id = entity.pipelineId;

        res.pipeline = entity.pipeline ? new PipelineMapper().mapRes(undefined, entity.pipeline) : undefined;

        res.otherdetails = entity.otherDetails;
        res.organization_id = entity.organizationId;
        res.organization = entity.organization ? new OrganizationMapper().mapRes(undefined, entity.organization) : undefined;

        res.product_id = entity.productId;
        res.product = entity.product ? new ProductMapper().mapRes(undefined, entity.product) : undefined;

        res.project_id = entity.projectId;
        res.project = entity.project ? new ProjectMapper().mapRes(undefined, entity.project) : undefined;

        res.comments = entity.comments ? entity.comments.map(comment =>
            new CommentMapper().mapRes(undefined, comment)) : undefined;

        return res;
    }

}