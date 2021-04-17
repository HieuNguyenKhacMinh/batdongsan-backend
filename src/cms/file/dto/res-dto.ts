import { ProductResDto } from "src/cms/product/dto/res-dto";

export class FileResDto {
    id: string;
    name: string;
    path: string;
    product_id : string;
    productFiles:ProductResDto;
    productVideos:ProductResDto;
    description: string;
}