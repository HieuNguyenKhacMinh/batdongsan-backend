import { ProvinceCityResDto } from "src/cms/city/dto/res-dto";

export class DistrictResDto {
    id: string;
    name: string;
    description: string;
    city_id: string;
    city: ProvinceCityResDto;
}