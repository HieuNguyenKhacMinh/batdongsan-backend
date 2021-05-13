import { OrganizationResDto } from './../../../crm/organization/dto/res-dto';
export class WidgetResDto {
    id: string;
    name: string;
    description: string;

    organization_id:string;
    organization: OrganizationResDto;
}