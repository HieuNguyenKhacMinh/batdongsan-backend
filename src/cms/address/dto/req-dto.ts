import { ApiProperty } from "@nestjs/swagger";
import { messageRequired } from "src/common/constant";
import { IReqDtoFactory } from "src/common/interfaces/dto.interface";

export enum Fields {
    homenumber = "homenumber",
    stress = "stress",
    description ="description"
} 

export class AddressReqDto implements IReqDtoFactory {
    @ApiProperty()
    id: string;
    @ApiProperty()
    homenumbe: string;
    @ApiProperty()
    street: string;
    @ApiProperty()
    description: string;
    validate(dto: AddressReqDto) {
        var errors = [];
        if (!dto.homenumbe || dto.homenumbe.length == 0) {
            errors.push({
                field: Fields.homenumber,
                message: messageRequired(Fields.homenumber)
            });
        }
        if (!dto.street || dto.street.length == 0) {
            errors.push({
                field: Fields.stress,
                message: messageRequired(Fields.stress)
            });
        }

        if (!dto.description || dto.description.length == 0) {
            errors.push({
                field: Fields.stress,
                message: messageRequired(Fields.description)
            });
        }
           return errors.length > 0 ? errors : undefined;
    }

}