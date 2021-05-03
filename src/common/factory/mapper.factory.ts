import { WishlistMapper } from '../../cms/wishlist/dto/mapper';
import { ProjectTypeMapper } from './../../master-data/project_type/dto/mapper';

import { PostStatusMapper } from 'src/master-data/post_status/dto/mapper';
import { AddressMapper } from "src/master-data/address/dto/mapper";
import { BalconydirectionMapper } from "src/master-data/balcony-direction/dto/mapper";
import { CategoryMapper } from "src/cms/category/dto/mapper";
import { CommentMapper } from "src/cms/comment/dto/mapper";
import { CountryMapper } from "src/master-data/country/dto/mapper";
import { CountryReqDto } from "src/master-data/country/dto/req-dto";
import { DistrictMapper } from "src/master-data/district/dto/mapper";
import { FormalityMapper } from "src/master-data/formality/dto/mapper";
import { HashtagMapper } from "src/cms/hashtag/dto/mapper";
import { HouseDirestionMapper } from "src/master-data/house_direstion/dto/mapper";
import { LeadMapper } from "src/crm/lead/dto/mapper";
import { MenuMapper } from "src/cms/menu/dto/mapper";
import { NotificationMapper } from "src/cms/notification/dto/mapper";
import { NotificationTypeMapper } from "src/cms/notification_type/dto/mapper";
import { OrganizationMapper } from "src/crm/organization/dto/mapper";
import { PageMapper } from "src/cms/page/dto/mapper";
import { PostMapper } from "src/cms/post/dto/mapper";
import { ProductMapper } from "src/cms/product/dto/mapper";
import { ProvinceCityMapper } from "src/master-data/city/dto/mapper";
import { TableConfigMapper } from "src/master-data/table_config/dto/mapper";
import { WardsMapper } from "src/master-data/wards/dto/mapper";
import { ObjectType } from "typeorm";
import { IMapperFactory } from "../interfaces/mapper.interface";
import { ProductTypeMapper } from "src/master-data/product_type/dto/mapper";
import { ProductUnitMapper } from "src/master-data/product_unit/dto/mapper";
import { MessageMapper } from "src/cms/message/dto/mapper";
import { DashboardMapper } from "src/cms/dashboard/dto/mapper";
import { ProjectMapper } from "src/cms/project/dto/mapper";
import { OpportunityMapper } from "src/crm/opportunity/dto/mapper";
import { ContactMapper } from "src/crm/contact/dto/mapper";
import { WidgetMapper } from "src/cms/widget/dto/mapper";
import { UserMapper } from 'src/identity/user/dto/mapper';
import { OrderMapper } from 'src/cms/order/dto/mapper';
import { PipelineMapper } from 'src/crm/pipeline/dto/mapper';

export class Mapper {
    static getMapper<TMapper>(type: ObjectType<TMapper>): IMapperFactory {
        switch (type.name) {

            case PostMapper.name:
                return new PostMapper;

            case CategoryMapper.name:
                return new CategoryMapper;

            case PostStatusMapper.name:
                return new PostStatusMapper;

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

            case PageMapper.name:
                return new PageMapper;

            case ProductTypeMapper.name:
                return new ProductTypeMapper;

            case ProductUnitMapper.name:
                return new ProductUnitMapper;

            case MessageMapper.name:
                return new MessageMapper;

            case DashboardMapper.name:
                return new DashboardMapper;

            case ProjectMapper.name:
                return new ProjectMapper;

            case OpportunityMapper.name:
                return new OpportunityMapper;

            case ContactMapper.name:
                return new ContactMapper;

            case WidgetMapper.name:
                return new WidgetMapper;

            case ProjectTypeMapper.name:
                return new ProjectTypeMapper;

            case UserMapper.name:
                return new UserMapper;

            case OrderMapper.name:
                return new OrderMapper;

            case WishlistMapper.name:
                return new WishlistMapper;

            case PipelineMapper.name:
                return new PipelineMapper;

            default:
                throw `IMapperFactory ${type.name} does not exist`;
        }
    }
}