import { OrganizationResDto } from './../../../crm/organization/dto/res-dto';
import { WishlistResDto } from './../../../master-data/wishlist/dto/res-dto';
import { WishlistEntity } from './../../../database.module/entities/wishlist.entity';
import { OpportunityResDto } from './../../../crm/opportunity/dto/res-dto';
import { LeadResDto } from './../../../crm/lead/dto/res-dto';
import { PostResDto } from 'src/cms/post/dto/res-dto';
import { ProjectResDto } from './../../project/dto/res-dto';
import { NotificationTypeResDto } from "src/cms/notification_type/dto/res-dto";
import { ProductResDto } from "src/cms/product/dto/res-dto";
import { UserResDto } from "src/identity/user/dto/res-dto";
import { ContactResDto } from 'src/crm/contact/dto/res-dto';

export class NotificationResDto {
    id: string;
    name: string;
    description: string;
    notification_type_id: string;
    notification_type: NotificationTypeResDto;
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
    lead_id:string;
    lead:LeadResDto;
    opportunity_id:string;
    opportunity:OpportunityResDto;
    wishlist_id:string;
    wishlist:WishlistResDto;
    organization_id:string;
    organization:OrganizationResDto;

}