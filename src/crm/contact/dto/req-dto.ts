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
    @ApiProperty()
    phone_number: string;
    @ApiProperty()
    name:string;
    @ApiProperty()
    email:string;
    @ApiProperty()
    country_id:string;
    @ApiProperty()
    city_id:string;
    @ApiProperty()
    district_id:string;
    @ApiProperty()
    wards_id:string;
    @ApiProperty()
    user_id:string;
    validate(dto: ContactReqDto) {
        var errors = [];
    }
}