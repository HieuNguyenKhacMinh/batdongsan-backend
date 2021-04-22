import { ApiProperty } from "@nestjs/swagger";
import { messageRequired } from "src/common/constant";
import { IReqDtoFactory } from "src/common/interfaces/dto.interface";

export enum Fields {
    name = "name",
}

export class OrderReqDto implements IReqDtoFactory {
    @ApiProperty()
    id: string;
    @ApiProperty()
    ngayBan: string;
    @ApiProperty()
    giaTien: number;
    @ApiProperty()
    vat: number;
    @ApiProperty()
    thanhTien: number;
    @ApiProperty()
    user_id: string;
    @ApiProperty()
    product_id: string;
    validate(dto: OrderReqDto) {
     
       
    }

}