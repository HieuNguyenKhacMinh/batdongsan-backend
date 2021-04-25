import { PostResDto } from 'src/cms/post/dto/res-dto';
import { PostReqDto } from 'src/cms/post/dto/req-dto';
import { ProjectResDto } from 'src/cms/project/dto/res-dto';
import { UserResDto } from '../../../identity/user/dto/res-dto';
import { OrganizationResDto } from "src/crm/organization/dto/res-dto";
import { ProductResDto } from 'src/cms/product/dto/res-dto';
import { ContactResDto } from 'src/crm/contact/dto/res-dto';

export class LeadResDto {
    id: string;
    firsname: string;
    surename: string;
    otherdetails: string;
    organization_id: string;
    organization:OrganizationResDto;
    user_id:string;
    user:UserResDto;
    product_id:string;
    product:ProductResDto;
    project_id:string;
    project:ProjectResDto;
    post_id:string;
    contact_id:string;
    contact:ContactResDto;
    post:PostResDto;

}