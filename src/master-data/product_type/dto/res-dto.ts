import { FormalityResDto } from "src/master-data/formality/dto/res-dto";

export class ProductTypeResDto {
    id: string;
    name: string;
    order: number;
    formality_id : string;
    formality:FormalityResDto;
    description: string;
}