import { OrganizationResDto } from "src/crm/organization/dto/res-dto";

export class LeadResDto {
    id: string;
    firsname: string;
    surename: string;
    otherdetails: string;
    organization_id: string;
    organization:OrganizationResDto;
}