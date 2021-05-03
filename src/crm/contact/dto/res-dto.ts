import { UserResDto } from 'src/identity/user/dto/res-dto';
import { DistrictResDto } from 'src/master-data/district/dto/res-dto';
import { ProvinceCityResDto } from 'src/master-data/city/dto/res-dto';
import { CityEntity } from 'src/database.module/entities';
import { CountryResDto } from './../../../master-data/country/dto/res-dto';
import { AddressResDto } from "src/master-data/address/dto/res-dto";
import { WardsResDto } from 'src/master-data/wards/dto/res-dto';



export class ContactResDto {
    id: string;
    contact_account: string;
    address_id : string ;
    address: AddressResDto;
    contact_details: string;
    phone_number: string;
    name:string;
    email:string;
    country_id:string;
    city_id:string;
    district_id:string;
    wards_id:string;
    country: CountryResDto;
    city: ProvinceCityResDto;
    district:DistrictResDto;
    wards: WardsResDto;
    user_id: string;
    user: UserResDto;
}