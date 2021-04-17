import { ProvinceCityResDto } from "src/cms/city/dto/res-dto";

export class ProjectResDto {
    id: string;
    name: string;
    city_id: string;
    city:ProvinceCityResDto;
    description: string;
}