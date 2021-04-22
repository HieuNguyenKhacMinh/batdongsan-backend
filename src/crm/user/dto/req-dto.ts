import { ApiProperty } from "@nestjs/swagger";
import { messageRequired } from "src/common/constant";
import { IReqDtoFactory } from "src/common/interfaces/dto.interface";

export enum Fields {
    full_name = "fullname",
}

export class UserReqDto implements IReqDtoFactory {
    @ApiProperty()
    organization_id: string;
    @ApiProperty()
    id: string;
    @ApiProperty()
    full_name: string;
    @ApiProperty()
    gender: string;
    @ApiProperty()
    birthday: Date;
    @ApiProperty()
    description: string;
    @ApiProperty()
    phone_number: string;
    @ApiProperty()
    email: string;
    @ApiProperty()
    user_name: string;
    @ApiProperty()
    password: string;
    validate(dto: UserReqDto) {
        var errors = [];
        if (!dto.full_name || dto.full_name.length == 0) {
            errors.push({
                field: Fields.full_name,
                message: messageRequired(Fields.full_name)
            });
        }
           return errors.length > 0 ? errors : undefined;
    }

}