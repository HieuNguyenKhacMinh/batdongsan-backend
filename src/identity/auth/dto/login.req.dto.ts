import { ApiProperty } from '@nestjs/swagger';
export class LoginReqDto {
    @ApiProperty()
    email: string;

    @ApiProperty()
    password: string;
}
