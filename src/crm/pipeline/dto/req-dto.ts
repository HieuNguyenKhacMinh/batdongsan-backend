import { ApiProperty } from "@nestjs/swagger";
import { messageRequired } from "src/common/constant";
import { IReqDtoFactory } from "src/common/interfaces/dto.interface";

export enum Fields {
   
} 

export class PipelineReqDto implements IReqDtoFactory {
    @ApiProperty()
    id: string;
    @ApiProperty()
    name: string;
    @ApiProperty()
    order: number;
    @ApiProperty()
    organization_id : string ;
    @ApiProperty()
    description: string;
    validate(dto: PipelineReqDto) {
        var errors = [];
    }
}