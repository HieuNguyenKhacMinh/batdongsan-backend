import { ApiProperty } from "@nestjs/swagger";
import { messageRequired } from "src/common/constant";
import { IReqDtoFactory } from "src/common/interfaces/dto.interface";

export enum Fields {
    name = "name",
    content ="content"
}

export class TableConfigReqDto implements IReqDtoFactory {
    @ApiProperty()
    id: string;
    @ApiProperty()
    name: string;
    @ApiProperty()
    content: string;
    validate(dto: TableConfigReqDto) {
        var errors = [];
        if (!dto.name || dto.name.length == 0) {
            errors.push({
                field: Fields.name,
                message: messageRequired(Fields.name)
            });
        }

        if (!dto.content|| dto.content.length == 0) {
            errors.push({
                field: Fields.content,
                message: messageRequired(Fields.content)
            });
        }
           return errors.length > 0 ? errors : undefined;
    }

}