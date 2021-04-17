import { FormalityResDto } from "src/cms/formality/dto/res-dto";

export class ProductTypeResDto {
    id: string;
    name: string;
    order: number;
    formality_id : string;
    formality:FormalityResDto;
    description: string;
}