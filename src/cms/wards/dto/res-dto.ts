import { DistrictResDto } from "src/cms/district/dto/res-dto";

export class WardsResDto {
    id: string;
    name: string;
    description: string;
    district_id : string;
    district : DistrictResDto;
}