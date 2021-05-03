import { ProjectResDto } from 'src/cms/project/dto/res-dto';
import { PostResDto } from 'src/cms/post/dto/res-dto';
import { UserResDto } from '../../../identity/user/dto/res-dto';
import { ProductResDto } from "src/cms/product/dto/res-dto";
import { ProvinceCityResDto } from "src/master-data/city/dto/res-dto";
import { DistrictResDto } from "src/master-data/district/dto/res-dto";
import { WardsResDto } from "src/master-data/wards/dto/res-dto";

export class WishlistResDto {
    id: string;
    product_id: string;
    product: ProductResDto;
    user_id: string;
    post_id : string ;
    post : PostResDto;
    user: UserResDto;
    project_id: string;
    project: ProjectResDto
    delete_flag: number;
}