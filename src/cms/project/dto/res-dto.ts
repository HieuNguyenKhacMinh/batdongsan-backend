import { WishlistResDto } from './../../../cms/wishlist/dto/res-dto';
import { OrganizationResDto } from 'src/crm/organization/dto/res-dto';
import { CountryResDto } from 'src/master-data/country/dto/res-dto';
import { ProvinceCityResDto } from "src/master-data/city/dto/res-dto";
import { DistrictResDto } from "src/master-data/district/dto/res-dto";
import { WardsResDto } from "src/master-data/wards/dto/res-dto";
import { AddressResDto } from 'src/master-data/address/dto/res-dto';
import { ProjectTypeResDto } from 'src/master-data/project_type/dto/res-dto';
import { ProductResDto } from 'src/cms/product/dto/res-dto';
import { CommentResDto } from 'src/cms/comment/dto/res-dto';
import { FileResDto } from 'src/cms/file/dto/res-dto';

export class ProjectResDto {
    id: string;
    name: string;
    coutry_id: string;
    country: CountryResDto;
    city_id: string;
    city: ProvinceCityResDto;
    district_id: string;
    district: DistrictResDto;
    wards_id: string;
    wards: WardsResDto;
    address_id: string;
    address: AddressResDto;
    distribution_unit: string; // Đơn vị phân phối
    total_area: number;  // Tổng diện tích
    street: string;
    home_number: number;
    latitude: number;   // tọa độ x
    longitude: number;  // tọa độ y
    overview: string;   // tổng quan
    infrastructure_location: string;  //Vị trí hạ tầng
    infrastructure_design: string;   // Thiết kế mặt bằng  
    project_type_id: string;
    projectType: ProjectTypeResDto;
    description: string;
    product_id:string;
    organization_id: string;
    organization:OrganizationResDto;
    products: ProductResDto[];
    comments: CommentResDto[];
    wishlists: WishlistResDto[];
    files: FileResDto[];
}