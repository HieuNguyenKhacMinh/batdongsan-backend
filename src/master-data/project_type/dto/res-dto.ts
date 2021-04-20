import { ProjectResDto } from "src/cms/project/dto/res-dto";
import { FormalityResDto } from "src/master-data/formality/dto/res-dto";

export class ProjectTypeResDto {
    id: string;
    name: string;
    description: string;
    projects: ProjectResDto[];
}