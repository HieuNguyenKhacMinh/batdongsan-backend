import { ApiProperty } from "@nestjs/swagger";
import { messageRequired } from "src/common/constant";
import { IReqDtoFactory } from "src/common/interfaces/dto.interface";

export enum Fields {
    name = "name",
    country_id = "country_id",
}

export class ProvinceCityReqDto implements IReqDtoFactory {
    @ApiProperty()
    id: string;
    @ApiProperty()
    name: string;
    @ApiProperty()
    description: string;

    @ApiProperty()
    country_id: string;

    validate(dto: ProvinceCityReqDto) {
        var errors = [];
        if (!dto.name || dto.name.length == 0) {
            errors.push({
                field: Fields.name,
                message: messageRequired(Fields.name)
            });
        }

        if (!dto.country_id || dto.country_id.length == 0) {
            errors.push({
                field: Fields.country_id,
                message: messageRequired(Fields.country_id)
            });
        }
        return errors.length > 0 ? errors : undefined;
    }

}