import { ApiProperty } from "@nestjs/swagger";
import { messageRequired } from "src/common/constant";
import { IReqDtoFactory } from "src/common/interfaces/dto.interface";

export enum Fields {
    name = "name",
}

export class ProjectReqDto implements IReqDtoFactory {

    @ApiProperty()
    id: string;

    @ApiProperty()
    name: string;

    @ApiProperty()
    coutry_id: string;

    @ApiProperty()
    city_id: string;

    @ApiProperty()
    district_id: string;

    @ApiProperty()
    wards_id: string;

    @ApiProperty()
    address_id: string;

    @ApiProperty()
    distribution_unit: string; // Đơn vị phân phối

    @ApiProperty()
    total_area: number;  // Tổng diện tích

    @ApiProperty()
    street: string;

    @ApiProperty()
    home_number: number;

    @ApiProperty()
    latitude: number;   // tọa độ x

    @ApiProperty()
    longitude: number;  // tọa độ y

    @ApiProperty()
    overview: string;   // tổng quan

    @ApiProperty()
    infrastructure_location: string;  //Vị trí mặt bằng

    @ApiProperty()
    infrastructure_design: string;   // Thiết kế mặt bằng

    @ApiProperty()
    photoLibrary: string;

    @ApiProperty()
    project_type_id: string;

    @ApiProperty()
    description: string;

    @ApiProperty()
    organization_id: string;
    
    
    @ApiProperty()
    file_id: string;
    
    validate(dto: ProjectReqDto) {
        var errors = [];
        if (!dto.name || dto.name.length == 0) {
            errors.push({
                field: Fields.name,
                message: messageRequired(Fields.name)
            });
        }
        return errors.length > 0 ? errors : undefined;
    }

}