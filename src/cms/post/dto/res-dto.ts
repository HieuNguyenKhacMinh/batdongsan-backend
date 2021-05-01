import { OrganizationResDto } from './../../../crm/organization/dto/res-dto';
import { CategoryReqDto } from "src/cms/category/dto/req-dto";
import { CategoryResDto } from "src/cms/category/dto/res-dto";
import { HashtagReqDto } from "src/cms/hashtag/dto/req-dto";
import { HashtagResDto } from "src/cms/hashtag/dto/res-dto";
import { CountryResDto } from "src/master-data/country/dto/res-dto";
import { StatusResDto } from "src/master-data/post_status/dto/res-dto";
import { CommentResDto } from 'src/cms/comment/dto/res-dto';

export class PostResDto {
    id: string;
    title: string;
    content: string;
    category_id: string;
    category: CategoryResDto;
    widget_id: string;
    status_id: string;
    status: StatusResDto;
    page_id: string;
    hashtags: HashtagResDto[];
    sub_content: string;
    organization_id: string;
    organization:OrganizationResDto;
    comments: CommentResDto[];
}