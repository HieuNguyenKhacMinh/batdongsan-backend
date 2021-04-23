import { PipelineResDto } from './../../pipeline/dto/res-dto';
import { CommentResDto } from './../../../cms/comment/dto/res-dto';
import { ProductResDto } from "src/cms/product/dto/res-dto";
import { ProjectResDto } from "src/cms/project/dto/res-dto";
import { OrganizationResDto } from "src/crm/organization/dto/res-dto";

export class OpportunityResDto {
    id: string;
    firsname: string;
    surename: string;
    otherdetails: string;
    name: string;
    description: string;
    value: number;
    unit: number;
    organization_id: string;
    organization: OrganizationResDto;
    pipeline_id: string;
    pipeline: PipelineResDto;
    product_id: string;
    product: ProductResDto;
    project_id: string;
    project: ProjectResDto;
    comments: CommentResDto[];
}