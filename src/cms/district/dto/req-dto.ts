import { ApiProperty } from "@nestjs/swagger";
import { messageRequired } from "src/common/constant";
import { IReqDtoFactory } from "src/common/interfaces/dto.interface";

export enum Fields {
    name = "name",
    description = "description"
}

export class DistrictReqDto implements IReqDtoFactory {
    @ApiProperty()
    id: string;
    @ApiProperty()
    name: string;
    @ApiProperty()
    description: string;
    validate(dto: DistrictReqDto) {
        var errors = [];
        if (!dto.name || dto.name.length == 0) {
            errors.push({
                field: Fields.name,
                message: messageRequired(Fields.name)
            });
        }
        if (!dto.description || dto.description.length == 0) {
            errors.push({
                field: Fields.description,
                message: messageRequired(Fields.description)
            });
        }
           return errors.length > 0 ? errors : undefined;
    }

}