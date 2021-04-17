import { ApiProperty } from "@nestjs/swagger";
import { messageRequired } from "src/common/constant";
import { IReqDtoFactory } from "src/common/interfaces/dto.interface";
import { FileEntity } from "src/database.module/entities";

export enum Fields {
    title = "title",
}

export class ProductReqDto implements IReqDtoFactory {
    @ApiProperty()
    id: string; sub_title: string;
    @ApiProperty()
    title: string;
    @ApiProperty()
    sub_description: string;
    @ApiProperty()
    description: string;
    @ApiProperty()
    price: number;
    @ApiProperty()
    files: FileEntity[];
    @ApiProperty()
    videos: FileEntity[];
    @ApiProperty()
    formality_id: string;
    @ApiProperty()
    address_id: string;
    // addres info
    // home number
    @ApiProperty()
    home_number: string;
    // street
    @ApiProperty()
    street: string;
    // district
    @ApiProperty()
    district_id: string;

    @ApiProperty()
    wards_id: string;
    @ApiProperty()
    city_id: string;
    @ApiProperty()
    product_type: string;
    @ApiProperty()
    project_id: string;
    @ApiProperty()
    product_unit_id: string;
    @ApiProperty()
    house_direstion_id: string;
    @ApiProperty()
    acreage: number;
    @ApiProperty()
    facade: number;
    @ApiProperty()
    entry_width: number;
    @ApiProperty()
    balcony_direction_id: string;
    @ApiProperty()
    no_of_bedroom: number;
    @ApiProperty()
    no_of_toilet: number;
    validate(dto: ProductReqDto) {
        var errors = [];
        if (!dto.title || dto.title.length == 0) {
            errors.push({
                field: Fields.title,
                message: messageRequired(Fields.title)
            });
        }
        return errors.length > 0 ? errors : undefined;
    }

}