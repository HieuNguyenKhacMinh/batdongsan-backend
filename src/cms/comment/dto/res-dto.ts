export class CommentResDto {
    id: string;
    post_id: string;
    content: string;
    created_date: string;
    product_id: string;
    children: CommentResDto[]
}