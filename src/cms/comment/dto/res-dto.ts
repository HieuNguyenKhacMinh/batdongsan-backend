export class CommentResDto {
    id: string;
    post_id: string;
    content: string;
    created_date: string;
    children: CommentResDto[]
}