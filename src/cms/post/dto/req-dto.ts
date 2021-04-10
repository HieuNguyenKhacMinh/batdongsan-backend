import { ApiProperty } from "@nestjs/swagger";
import { messageRequired } from "src/common/constant";
import { IReqDtoFactory } from "src/common/interfaces/dto.interface";

export enum Fields {
    title = "title",
    category_id = "category_id",
    status_id = "status_id",
    hashtag_id = "hashtag_id",
    widget_id = "widget_id",
    page_id = "page_id"
}

export enum Relations {

}

export class PostReqDto implements IReqDtoFactory {
    @ApiProperty()
    public id: string;
    @ApiProperty()
    public title: string;
    @ApiProperty()
    public content: string;
    @ApiProperty()
    public Hashtag_id: string;
    @ApiProperty()
    public category_id: string;
    @ApiProperty()
    public widget_id: string;
    @ApiProperty()
    public status_id: string;
    @ApiProperty()
    public page_id: string;

    validate(dto: PostReqDto) {
        var errors = [];
        if (!dto.title || dto.title.length == 0) {
            errors.push({
                field: Fields.title,
                message: messageRequired(Fields.title)
            });
        }
        if (!dto.category_id || dto.category_id.length == 0) {
            errors.push({
                field: Fields.category_id,
                message: messageRequired(Fields.category_id)
            });
        }
        if (!dto.status_id || dto.status_id.length == 0) {
            errors.push({
                field: Fields.category_id,
                message: messageRequired(Fields.status_id)
            });
        }

        return errors.length > 0 ? errors : undefined;

    }

}