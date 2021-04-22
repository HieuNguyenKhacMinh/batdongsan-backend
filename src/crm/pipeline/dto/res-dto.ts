import { OrganizationResDto } from './../../organization/dto/res-dto';
import { AddressResDto } from "src/master-data/address/dto/res-dto";
import { OpportunityResDto } from 'src/crm/opportunity/dto/res-dto';



export class PipelineResDto {
    id: string;
    name: string;
    order: number;
    organization_id : string ;
    organization: OrganizationResDto;
    description: string;
    opportunities: OpportunityResDto[];

}