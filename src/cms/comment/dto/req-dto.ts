import { ApiProperty } from "@nestjs/swagger";
import { messageRequired } from "src/common/constant";
import { IReqDtoFactory } from "src/common/interfaces/dto.interface";

export enum Fields {
    content = "content",
    post_id = "post_id"
}

export class CommentReqDto implements IReqDtoFactory {
    @ApiProperty()
    id: string;

    @ApiProperty({ required: false })
    post_id: string;

    @ApiProperty({ required: false })
    product_id: string;

    @ApiProperty()
    content: string;

    @ApiProperty({ required: false })
    parent_id: string;

    // không cần request lên từ frontend
    created_by: string


    validate(dto: CommentReqDto) {
        var errors = [];
        if (!dto.content || dto.content.length == 0) {
            errors.push({
                field: Fields.content,
                message: messageRequired(Fields.content)
            });
        }
       
        return errors.length > 0 ? errors : undefined;
    }

}