import { ApiProperty } from "@nestjs/swagger";

export class RegisterReqDto {

    // full name to display
    @ApiProperty()
    full_name: string;

    // email
    @ApiProperty()
    email: string;

    // password
    @ApiProperty()
    password: string;

    // company name to create a new company
    @ApiProperty()
    company_name: string;

    // or domain
    @ApiProperty()
    domain: string;

}