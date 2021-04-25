import { ApiProperty } from "@nestjs/swagger";
import { messageRequired } from "src/common/constant";
import { IReqDtoFactory } from "src/common/interfaces/dto.interface";

export enum Fields {
    home_number = "home_number",
    stress = "stress",
} 

export class WishlistReqDto implements IReqDtoFactory {
    @ApiProperty()
    id: string;
    @ApiProperty()
    product_id: string;
    @ApiProperty()
    user_id: string;
    validate(dto: WishlistReqDto) {
        
        
    }
}