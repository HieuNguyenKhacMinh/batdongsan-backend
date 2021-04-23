import { AddressResDto } from "src/master-data/address/dto/res-dto";
import { ProvinceCityResDto } from "src/master-data/city/dto/res-dto";
import { DistrictResDto } from "src/master-data/district/dto/res-dto";
import { FormalityResDto } from "src/master-data/formality/dto/res-dto";
import { HouseDirestionResDto } from "src/master-data/house_direstion/dto/res-dto";
import { ProductTypeResDto } from "src/master-data/product_type/dto/res-dto";
import { ProductUnitResDto } from "src/master-data/product_unit/dto/res-dto";
import { ProjectResDto } from "src/cms/project/dto/res-dto";
import { WardsResDto } from "src/master-data/wards/dto/res-dto";
import { CountryResDto } from "src/master-data/country/dto/res-dto";


export class ProductResDto {
    id: string
    sub_title: string;
    title: string;
    sub_description: string;
    description: string;
    price: string;
    formality_id: string;
    formality : FormalityResDto;
    address_id: string;
    address: AddressResDto;
    wards_id: string;
    wards:WardsResDto;
    district_id: string;
    district:DistrictResDto;
    city_id: string;
    city : ProvinceCityResDto;
    product_type_id: string;
    product_type: ProductTypeResDto;
    project_id: string;
    project: ProjectResDto;
    product_unit_id: string;
    product_unit: ProductUnitResDto;
    house_direstion_id: string;
    house_direstion: HouseDirestionResDto;
    acreage: number;
    facade: number;
    entry_width: number;
    balcony_direction_id: string;
    balcony_direstion: HouseDirestionResDto;
    no_of_bedroom: number;
    no_of_toilet: number;
    country_id:string;
    country:CountryResDto;
    no_of_floor: number;   // số tầng
    juridical: number;    // pháp lý 0: sổ đỏ
    contact_name: string;
    phone_number:string;
    email: string;
    street: string;
    home_number: string;
    is_buy_hire:number;
    
}