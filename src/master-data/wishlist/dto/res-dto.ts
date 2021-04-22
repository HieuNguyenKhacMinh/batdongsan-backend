import { UserResDto } from './../../../crm/user/dto/res-dto';
import { ProductResDto } from "src/cms/product/dto/res-dto";
import { ProvinceCityResDto } from "src/master-data/city/dto/res-dto";
import { DistrictResDto } from "src/master-data/district/dto/res-dto";
import { WardsResDto } from "src/master-data/wards/dto/res-dto";

export class WishlistResDto {
    id: string;
    product_id: string;
    product: ProductResDto;
    user_id: string;
    user: UserResDto;
}