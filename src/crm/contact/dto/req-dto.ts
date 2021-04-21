import { ApiProperty } from "@nestjs/swagger";
import { messageRequired } from "src/common/constant";
import { IReqDtoFactory } from "src/common/interfaces/dto.interface";

export enum Fields {
   
} 

export class ContactReqDto implements IReqDtoFactory {
    @ApiProperty()
    id: string;
    @ApiProperty()
    contact_account: string;
    @ApiProperty()
    address_id: string;
    @ApiProperty()
    contact_details: string;
    validate(dto: ContactReqDto) {
        var errors = [];
    }
}