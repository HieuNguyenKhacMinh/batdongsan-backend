import { ProvinceCityResDto } from "src/master-data/city/dto/res-dto";

export class ProjectResDto {
    id: string;
    name: string;
    city_id: string;
    city:ProvinceCityResDto;
    description: string;
}