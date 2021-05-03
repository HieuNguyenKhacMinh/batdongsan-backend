import { ApiProperty } from "@nestjs/swagger";
import { messageRequired } from "src/common/constant";
import { IReqDtoFactory } from "src/common/interfaces/dto.interface";

export enum Fields {
    name = "name",
}

export class NotificationReqDto implements IReqDtoFactory {
    @ApiProperty()
    id: string;
    @ApiProperty()
    name: string;
    @ApiProperty()
    description: string;
    @ApiProperty()
    notification_type: number;
    @ApiProperty()
    user_id: string;
    @ApiProperty()
    product_id: string;
    @ApiProperty()
    project_id: string;
    @ApiProperty()
    post_id: string;
    @ApiProperty()
    contact_id: string;
    @ApiProperty()
    lead_id: string;
    @ApiProperty()
    opportunity_id: string;
    @ApiProperty()
    wishlist_id: string;
    @ApiProperty()
    organization_id: string;
    validate(dto: NotificationReqDto) {
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