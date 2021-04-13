import { FileEntity } from "src/database.module/entities";

export class ProductResDto {
    id: string
    sub_title: string;
    title: string;
    sub_description: string;
    description: string;
    price: number;
    files: FileEntity[];
    videos: FileEntity[];
    formality_id: string;
    address_id: string;
    ward_id: string;
    city_id: string;
    product_type: string;
    project_id: string;
    product_unit_id: string;
    house_direstion_id: string;
    acreage: number;
    facade: number;
    entry_width: number;
    balcony_direction_id: string;
    no_of_bedroom: number;
    no_of_toilet: number;

}