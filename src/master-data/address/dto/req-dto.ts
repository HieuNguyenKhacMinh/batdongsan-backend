import { ApiProperty } from "@nestjs/swagger";
import { messageRequired } from "src/common/constant";
import { IReqDtoFactory } from "src/common/interfaces/dto.interface";

export enum Fields {
    home_number = "home_number",
    stress = "stress",
} 

export class AddressReqDto implements IReqDtoFactory {
    @ApiProperty()
    id: string;
    @ApiProperty()
    home_number: string;
    @ApiProperty()
    street: string;
    @ApiProperty()
    wards_id: string;
    @ApiProperty()
    city_id: string;
    @ApiProperty()
    district_id: string;
    validate(dto: AddressReqDto) {
        var errors = [];
        if (!dto.home_number || dto.home_number.length == 0) {
            errors.push({
                field: Fields.home_number,
                message: messageRequired(Fields.home_number)
            });
        }
        if (!dto.street || dto.street.length == 0) {
            errors.push({
                field: Fields.stress,
                message: messageRequired(Fields.stress)
            });
        }
    }
}