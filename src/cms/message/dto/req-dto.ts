import { ApiProperty } from "@nestjs/swagger";
import { messageRequired } from "src/common/constant";
import { IReqDtoFactory } from "src/common/interfaces/dto.interface";

export enum Fields {
    content_type = "content_type",
} 

export class MessageReqDto implements IReqDtoFactory {
    @ApiProperty()
    id: string;
    @ApiProperty()
    from: string;
    @ApiProperty()
    to: string;
    @ApiProperty()
    content_type: string;
    @ApiProperty()
    forward_id: string;
    validate(dto: MessageReqDto) {
        var errors = [];
        if (!dto.content_type || dto.content_type.length == 0) {
            errors.push({
                field: Fields.content_type,
                message: messageRequired(Fields.content_type)
            });
        }
    }
}