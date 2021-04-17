import { FormalityResDto } from "src/cms/formality/dto/res-dto";

export class ProjectTypeResDto {
    id: string;
    name: string;
    formality_id : string;
    formality:FormalityResDto;
    description: string;
}