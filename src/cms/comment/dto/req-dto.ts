import { ApiProperty } from "@nestjs/swagger";
import { messageRequired } from "src/common/constant";
import { IReqDtoFactory } from "src/common/interfaces/dto.interface";

export enum Fields {
    content = "content",
}

export class CommentReqDto implements IReqDtoFactory {
    @ApiProperty()
    id: string;
    @ApiProperty()
    content: string;
    
    validate(dto: CommentReqDto) {
        var errors = [];
        if (!dto.content|| dto.content.length == 0) {
            errors.push({
                field: Fields.content,
                message: messageRequired(Fields.content)
            });
        }
           return errors.length > 0 ? errors : undefined;
    }

}