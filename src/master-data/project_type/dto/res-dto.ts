import { FormalityResDto } from "src/master-data/formality/dto/res-dto";

export class ProjectTypeResDto {
    id: string;
    name: string;
    formality_id : string;
    formality:FormalityResDto;
    description: string;
}