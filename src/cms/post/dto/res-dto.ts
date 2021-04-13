import { HashtagReqDto } from "src/cms/hashtag/dto/req-dto";
import { HashtagResDto } from "src/cms/hashtag/dto/res-dto";

export class PostResDto {
    id: string;
    title: string;
    content: string;
    Hashtag_id: string;
    category_id: string;
    widget_id: string;
    status_id: string;
    page_id: string;
    hashtags: HashtagResDto[]
}