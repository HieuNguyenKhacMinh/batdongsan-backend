import { UserResDto } from "src/identity/user/dto/res-dto";

export class CommentResDto {
    id: string;
    post_id: string;
    content: string;
    created_date: string;
    product_id: string;
    children: CommentResDto[];
    created_by: string;
    created_by_user: UserResDto;

}