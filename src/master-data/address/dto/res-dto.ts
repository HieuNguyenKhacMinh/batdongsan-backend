import { ProvinceCityResDto } from "src/master-data/city/dto/res-dto";
import { DistrictResDto } from "src/master-data/district/dto/res-dto";
import { WardsResDto } from "src/master-data/wards/dto/res-dto";

export class AddressResDto {
    id: string;
    home_number: string;
    street: string;
    wards_id: string;
    wards: WardsResDto;
    city_id: string;
    city: ProvinceCityResDto;
    district_id: string;
    district: DistrictResDto;
}