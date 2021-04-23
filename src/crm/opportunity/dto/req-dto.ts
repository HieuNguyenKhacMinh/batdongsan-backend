import { ApiProperty } from "@nestjs/swagger";
import { messageRequired } from "src/common/constant";
import { IReqDtoFactory } from "src/common/interfaces/dto.interface";

export enum Fields {
    name = "name"
} 

export class OpportunityReqDto implements IReqDtoFactory {
    @ApiProperty()
    id: string;
    @ApiProperty()
    name: string;
    @ApiProperty()
    description: string;
    @ApiProperty()
    value: number;
    @ApiProperty()
    unit: number;
    @ApiProperty()
    otherdetails: string;
    @ApiProperty()
    organization_id: string;
    @ApiProperty()
    pipeline_id: string;
    @ApiProperty()
    product_id: string;
    @ApiProperty()
    project_id: string;
    
    validate(dto: OpportunityReqDto) {
        var errors = [];
        if (!dto.name || dto.name.length == 0) {
            errors.push({
                field: Fields.name,
                message: messageRequired(Fields.name)
            });
        }
    }
}