import { ProvinceCityResDto } from "src/cms/city/dto/res-dto";
import { DistrictResDto } from "src/cms/district/dto/res-dto";
import { WardsResDto } from "src/cms/wards/dto/res-dto";

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