import { PostResDto } from "src/cms/post/dto/res-dto";

export class CategoryResDto {
    id: string;
    name: string;
    path: string;
    description: string;
    posts: PostResDto[]
}