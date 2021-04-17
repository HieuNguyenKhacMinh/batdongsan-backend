import { AddressResDto } from "src/cms/address/dto/res-dto";
import { ProvinceCityResDto } from "src/cms/city/dto/res-dto";
import { DistrictResDto } from "src/cms/district/dto/res-dto";
import { FormalityResDto } from "src/cms/formality/dto/res-dto";
import { HouseDirestionResDto } from "src/cms/house_direstion/dto/res-dto";
import { ProductTypeResDto } from "src/cms/product_type/dto/res-dto";
import { ProductUnitReqDto } from "src/cms/product_unit/dto/req-dto";
import { ProductUnitResDto } from "src/cms/product_unit/dto/res-dto";
import { ProjectResDto } from "src/cms/project/dto/res-dto";
import { WardsResDto } from "src/cms/wards/dto/res-dto";
import { FileEntity } from "src/database.module/entities";

export class ProductResDto {
    id: string
    sub_title: string;
    title: string;
    sub_description: string;
    description: string;
    price: number;
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
}