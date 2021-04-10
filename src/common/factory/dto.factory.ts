import { CategoryReqDto } from "src/cms/category/dto/req-dto";
import { CommentReqDto } from "src/cms/comment/dto/req-dto";
import { HashtagReqDto } from "src/cms/hashtag/dto/req-dto";
import { MenuReqDto } from "src/cms/menu/dto/req-dto";
import { PageReqDto } from "src/cms/page/dto/req-dto";
import { PostReqDto } from "src/cms/post/dto/req-dto";
import { StatusReqDto } from "src/cms/status/dto/req-dto";
import { WidgetReqDto } from "src/cms/widget/dto/req-dto";
import { WidgetModule } from "src/cms/widget/widget.module";
import { ObjectType } from "typeorm";
import { IReqDtoFactory } from "../interfaces/dto.interface";

export class DtoFactory {
    static getDto<TDto>(type: ObjectType<TDto>): IReqDtoFactory {
        switch (type.name) {
            case PostReqDto.name:
                return new PostReqDto;
            case CategoryReqDto.name:
                return new CategoryReqDto;
            case StatusReqDto.name:
                return new StatusReqDto;
            case WidgetReqDto.name:
                return new WidgetReqDto;
            case PageReqDto.name:
                return new PageReqDto;
            case HashtagReqDto.name:
                return new HashtagReqDto;
            case CommentReqDto.name:
                return new CommentReqDto;
                case MenuReqDto.name:
                    return new MenuReqDto;
            default:
                throw `DtoFactory ${type.name} does not exist`;
        }
    }
}