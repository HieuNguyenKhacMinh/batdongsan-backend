import { ApiProperty } from "@nestjs/swagger";

export class ConditionDto {
    @ApiProperty({ required: false })
    category_id: string;

    @ApiProperty({ required: false })
    status: string;
}