import { ApiProperty } from "@nestjs/swagger";
import { messageRequired } from "src/common/constant";
import { IReqDtoFactory } from "src/common/interfaces/dto.interface";

export enum Fields {
    name = "name",
}

export class ReportWidgetReqDto implements IReqDtoFactory {
    @ApiProperty()
    id: string;
    @ApiProperty()
    dashboard_id: string;
    @ApiProperty()
    name: string;
    @ApiProperty()
    description: string;
    @ApiProperty()
    sql: string;
    @ApiProperty()
    data: string;
    validate(dto: ReportWidgetReqDto) {
        var errors = [];
        if (!dto.name || dto.name.length == 0) {
            errors.push({
                field: Fields.name,
                message: messageRequired(Fields.name)
            });
        }
           return errors.length > 0 ? errors : undefined;
    }

}