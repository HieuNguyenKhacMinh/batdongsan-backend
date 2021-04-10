import { CategoryMapper } from "src/cms/category/dto/mapper";
import { CommentMapper } from "src/cms/comment/dto/mapper";
import { HashtagMapper } from "src/cms/hashtag/dto/mapper";
import { MenuMapper } from "src/cms/menu/dto/mapper";
import { PostMapper } from "src/cms/post/dto/mapper";
import { StatusMapper } from "src/cms/status/dto/mapper";
import { ObjectType } from "typeorm";
import { IMapperFactory } from "../interfaces/mapper.interface";

export class Mapper {
    static getMapper<TMapper>(type: ObjectType<TMapper>): IMapperFactory {
        switch (type.name) {

            case PostMapper.name:
                return new PostMapper;

            case CategoryMapper.name:
                return new CategoryMapper;

            case StatusMapper.name:
                return new StatusMapper;

            case HashtagMapper.name:
                return new HashtagMapper;

            case CommentMapper.name:
                return new CommentMapper;

                case MenuMapper.name:
                    return new MenuMapper;

            default:
                throw `IMapperFactory ${type.name} does not exist`;
        }
    }
}