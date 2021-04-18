import { DistrictResDto } from "../../../master-data/district/dto/res-dto";

export class WardsResDto {
    id: string;
    name: string;
    description: string;
    district_id : string;
    district : DistrictResDto;
}