import { OrganizationResDto } from 'src/crm/organization/dto/res-dto';
export class UserResDto {
    id: string;
    full_name: string;
    gender: string;
    birthday: Date;
    description: string;
    phone_number: string;;
    email: string;
    user_name: string;
    organization_id: string;
    organization:OrganizationResDto;
    password:string;
    role:number;
}