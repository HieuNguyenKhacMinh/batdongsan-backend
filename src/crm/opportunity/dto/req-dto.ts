import { ApiProperty } from "@nestjs/swagger";
import { messageRequired } from "src/common/constant";
import { IReqDtoFactory } from "src/common/interfaces/dto.interface";

export enum Fields {
   firsname = "firsname"
} 

export class OpportunityReqDto implements IReqDtoFactory {
    @ApiProperty()
    id: string;
    @ApiProperty()
    firsname: string;
    @ApiProperty()
    surename: string;
    @ApiProperty()
    otherdetails: string;
    @ApiProperty()
    organization_id: string;
    @ApiProperty()
    pipeline_id: string;
    
    validate(dto: OpportunityReqDto) {
        var errors = [];
        if (!dto.firsname || dto.firsname.length == 0) {
            errors.push({
                field: Fields.firsname,
                message: messageRequired(Fields.firsname)
            });
        }
    }
}