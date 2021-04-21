import { AddressResDto } from "src/master-data/address/dto/res-dto";
import { ProvinceCityResDto } from "src/master-data/city/dto/res-dto";
import { DistrictResDto } from "src/master-data/district/dto/res-dto";
import { WardsResDto } from "src/master-data/wards/dto/res-dto";

export class OrganizationResDto {
    id: string;
    name: string;
    description: string;
    phone_number: string;
    email: string;
    domain: string;
    address_id: string;
    address: AddressResDto;

    // address information
    home_number: string;
    street: string;
    wards_id: string;
    wards: WardsResDto;
    city_id: string;
    city: ProvinceCityResDto;
    district_id: string;
    district: DistrictResDto;
}