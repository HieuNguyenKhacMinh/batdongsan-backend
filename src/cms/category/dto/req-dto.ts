import { ApiProperty } from "@nestjs/swagger";
import { messageRequired } from "src/common/constant";
import { IReqDtoFactory } from "src/common/interfaces/dto.interface";

export enum Fields {
    name = "name",
    path = "path",
    description = "description"
}

export class CategoryReqDto implements IReqDtoFactory {
    @ApiProperty()
    id: string;
    @ApiProperty()
    name: string;
    @ApiProperty()
    path: string;
    @ApiProperty()
    description: string;
    validate(dto: CategoryReqDto) {
        var errors = [];
        if (!dto.name || dto.name.length == 0) {
            errors.push({
                field: Fields.name,
                message: messageRequired(Fields.name)
            });
        }

        if (!dto.path|| dto.path.length == 0) {
            errors.push({
                field: Fields.path,
                message: messageRequired(Fields.path)
            });
        }
           return errors.length > 0 ? errors : undefined;
    }

}