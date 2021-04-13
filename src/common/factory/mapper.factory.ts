import { AddressMapper } from "src/cms/address/dto/mapper";
import { BalconydirectionMapper } from "src/cms/balcony-direction/dto/mapper";
import { CategoryMapper } from "src/cms/category/dto/mapper";
import { CommentMapper } from "src/cms/comment/dto/mapper";
import { CountryMapper } from "src/cms/country/dto/mapper";
import { CountryReqDto } from "src/cms/country/dto/req-dto";
import { DistrictMapper } from "src/cms/district/dto/mapper";
import { FormalityMapper } from "src/cms/formality/dto/mapper";
import { HashtagMapper } from "src/cms/hashtag/dto/mapper";
import { HouseDirestionMapper } from "src/cms/house_direstion/dto/mapper";
import { LeadMapper } from "src/cms/lead/dto/mapper";
import { MenuMapper } from "src/cms/menu/dto/mapper";
import { NotificationMapper } from "src/cms/notification/dto/mapper";
import { NotificationTypeMapper } from "src/cms/notification_type/dto/mapper";
import { OrganizationMapper } from "src/cms/organization/dto/mapper";
import { PostMapper } from "src/cms/post/dto/mapper";
import { ProductMapper } from "src/cms/product/dto/mapper";
import { ProvinceCityMapper } from "src/cms/province_city/dto/mapper";
import { StatusMapper } from "src/cms/status/dto/mapper";
import { TableConfigMapper } from "src/cms/table_config/dto/mapper";
import { WardsMapper } from "src/cms/wards/dto/mapper";
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

            case TableConfigMapper.name:
                return new TableConfigMapper;

            case DistrictMapper.name:
                return new DistrictMapper;

            case HouseDirestionMapper.name:
                return new HouseDirestionMapper;

            case BalconydirectionMapper.name:
                return new BalconydirectionMapper;

            case FormalityMapper.name:
                return new FormalityMapper;

            case MenuMapper.name:
                return new MenuMapper;

            case NotificationTypeMapper.name:
                return new NotificationTypeMapper;

            case NotificationMapper.name:
                return new NotificationMapper;

            case WardsMapper.name:
                return new WardsMapper;

            case ProvinceCityMapper.name:
                return new ProvinceCityMapper;

            case ProductMapper.name:
                return new ProductMapper;

            case AddressMapper.name:
                return new AddressMapper;

            case LeadMapper.name:
                return new LeadMapper;

            case OrganizationMapper.name:
                return new OrganizationMapper;

            case CountryMapper.name:
                return new CountryMapper;

            case ProvinceCityMapper.name:
                return new ProvinceCityMapper;

            case DistrictMapper.name:
                return new DistrictMapper;
                
            case WardsMapper.name:
                return new WardsMapper;


            default:
                throw `IMapperFactory ${type.name} does not exist`;
        }
    }
}