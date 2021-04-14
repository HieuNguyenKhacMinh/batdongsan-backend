import { CountryResDto } from "src/cms/country/dto/res-dto";

export class ProvinceCityResDto {
    id: string;
    name: string;
    description: string;
    country_id: string;
    country: CountryResDto;
}