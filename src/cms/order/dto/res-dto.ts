import { UserResDto } from './../../../crm/user/dto/res-dto';
import { ProductResDto } from 'src/cms/product/dto/res-dto';

export class OrderResDto {
    id: string;
    ngayBan: string;
    giaTien: number;
    vat: number;
    thanhTien: number;
    user_id: string;
    user: UserResDto;
    product_id: string;
    product: ProductResDto
}