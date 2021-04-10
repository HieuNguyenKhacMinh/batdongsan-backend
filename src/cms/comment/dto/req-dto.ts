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

    @ApiProperty()
    content: string;

    @ApiProperty({ required: false })
    parent_id: string;

    validate(dto: CommentReqDto) {
        var errors = [];
        if (!dto.content || dto.content.length == 0) {
            errors.push({
                field: Fields.content,
                message: messageRequired(Fields.content)
            });
        }
        if (!dto.post_id || dto.post_id.length == 0) {
            errors.push({
                field: Fields.post_id,
                message: messageRequired(Fields.post_id)
            });
        }
        return errors.length > 0 ? errors : undefined;
    }

}