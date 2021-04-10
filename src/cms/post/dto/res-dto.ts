import { HashtagResDto } from "src/cms/hashtag/dto/res-dto";

export class PostResDto {
    id: string;
    title: string;
    content: string;
    hashtags: HashtagResDto[]
}