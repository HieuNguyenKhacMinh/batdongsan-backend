import { AddressReqDto } from "src/cms/address/dto/req-dto";
import { BalconydirectionReqDto } from "src/cms/balcony-direction/dto/req-dto";
import { CategoryReqDto } from "src/cms/category/dto/req-dto";
import { CommentReqDto } from "src/cms/comment/dto/req-dto";
import { CountryModule } from "src/cms/country/country.module";
import { CountryReqDto } from "src/cms/country/dto/req-dto";
import { DashboardReqDto } from "src/cms/dashboard/dto/req-dto";
import { DistrictReqDto } from "src/cms/district/dto/req-dto";
import { FormalityMapper } from "src/cms/formality/dto/mapper";
import { FormalityReqDto } from "src/cms/formality/dto/req-dto";
import { HashtagReqDto } from "src/cms/hashtag/dto/req-dto";
import { HouseDirestionReqDto } from "src/cms/house_direstion/dto/req-dto";
import { LeadReqDto } from "src/cms/lead/dto/req-dto";
import { MenuReqDto } from "src/cms/menu/dto/req-dto";
import { NotificationReqDto } from "src/cms/notification/dto/req-dto";
import { NotificationTypeReqDto } from "src/cms/notification_type/dto/req-dto";
import { OrganizationReqDto } from "src/cms/organization/dto/req-dto";
import { PageReqDto } from "src/cms/page/dto/req-dto";
import { PageResDto } from "src/cms/page/dto/res-dto";
import { PostReqDto } from "src/cms/post/dto/req-dto";
import { ProductReqDto } from "src/cms/product/dto/req-dto";
import { ProvinceCityReqDto } from "src/cms/city/dto/req-dto";
import { StatusReqDto } from "src/cms/post_status/dto/req-dto";
import { TableConfigReqDto } from "src/cms/table_config/dto/req-dto";
import { WardsReqDto } from "src/cms/wards/dto/req-dto";
import { WidgetReqDto } from "src/cms/widget/dto/req-dto";
import { WidgetModule } from "src/cms/widget/widget.module";
import { ObjectType } from "typeorm";
import { IReqDtoFactory } from "../interfaces/dto.interface";
import { ProductTypeReqDto } from "src/cms/product_type/dto/req-dto";
import { ProductUnitReqDto } from "src/cms/product_unit/dto/req-dto";
import { MessageReqDto } from "src/cms/message/dto/req-dto";
import { ProjectReqDto } from "src/cms/project/dto/req-dto";
import { OpportunityResDto } from "src/cms/opportunity/dto/res-dto";
import { OpportunityReqDto } from "src/cms/opportunity/dto/req-dto";
import { ContactReqDto } from "src/cms/contact/dto/req-dto";

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
            case TableConfigReqDto.name:
                return new TableConfigReqDto;
            case DistrictReqDto.name:
                return new DistrictReqDto;
            case HouseDirestionReqDto.name:
                return new HouseDirestionReqDto;
            case BalconydirectionReqDto.name:
                return new BalconydirectionReqDto;
            case MenuReqDto.name:
                return new MenuReqDto;
            case FormalityReqDto.name:
                return new FormalityReqDto;
            case NotificationReqDto.name:
                return new NotificationReqDto;
            case NotificationTypeReqDto.name:
                return new NotificationTypeReqDto;
            case WardsReqDto.name:
                return new WardsReqDto;
            case ProvinceCityReqDto.name:
                return new ProvinceCityReqDto;
            case ProductReqDto.name:
                return new ProductReqDto;
            case AddressReqDto.name:
                return new AddressReqDto;
            case MenuReqDto.name:
                return new MenuReqDto;
            case DashboardReqDto.name:
                return new DashboardReqDto;
            case LeadReqDto.name:
                return new LeadReqDto;
            case OrganizationReqDto.name:
                return new OrganizationReqDto;
            case CountryReqDto.name:
                return new CountryReqDto;
            case ProvinceCityReqDto.name:
                return new ProvinceCityReqDto;
            case DistrictReqDto.name:
                return new DistrictReqDto;
            case WardsReqDto.name:
                return new WardsReqDto;

            case ProductTypeReqDto.name:
                return new ProductTypeReqDto;

            case ProductUnitReqDto.name:
                return new ProductUnitReqDto;

            case MessageReqDto.name:
                return new MessageReqDto;

            case ProjectReqDto.name:
                return new ProjectReqDto;

            case OpportunityReqDto.name:
                return new OpportunityReqDto;

            case ContactReqDto.name:
                return new ContactReqDto;

            case WidgetReqDto.name:
                return new WidgetReqDto;


            default:
                throw `DtoFactory ${type.name} does not exist`;
        }
    }
}