import { AuthModule } from './identity/auth/auth.module';
import { PipelineModule } from './crm/pipeline/pipeline.module';
import { WishlistModule } from './master-data/wishlist/wishlist.module';
import { UserModule } from './identity/user/user.module';
import { ProjectTypeModule } from './master-data/project_type/project_type.module';

import { PostStatusModule } from './master-data/post_status/post_status.module';
import { PostModule } from './cms/post/post.module';
import { CategoryModule } from './cms/category/category.module';
import { Module } from '@nestjs/common';
import { DatabaseModule } from './database.module/database.module';
import { BalconydirectionTypeModule } from './master-data/balcony-direction/balcony-direction.module';
import { FileModule } from './cms/file/file.module';
import { FormalityModule } from './master-data/formality/formality.module';
import { HashtagModule } from './cms/hashtag/hashtag.module';
import { HouseDirestionTypeModule } from './master-data/house_direstion/housedirection.module';
import { MenuTypeModule } from './cms/menu/menu.module';
import { NotificationModule } from './cms/notification/notification.module';
import { NotificationTypeModule } from './cms/notification_type/notification_type.module';
import { PageModule } from './cms/page/page.module';
import { ProductTypeTypeModule } from './master-data/product_type/product_type.module';
import { DistrictModule } from './master-data/district/district.module';
import { CommentModule } from './cms/comment/comment.module';
import { TableConfigModule } from './master-data/table_config/table_config.module';
import { ProvinceCityTypeModule } from './master-data/city/city.module';
import { ProductModule } from './cms/product/product.module';
import { AddressModule } from './master-data/address/address.module';
import { LeadModule } from './crm/lead/lead.module';
import { ReadStatusModule } from './master-data/read_status/read_status.module';
import { WidgetModule } from './cms/widget/widget.module';
import { OrganizationModule } from './crm/organization/organization.module';
import { DashboardModule } from './cms/dashboard/dashboard.module';
import { ReportWidgetModule } from './cms/report_widget/report_widget.module';
import { MessageModule } from './cms/message/message.module';
import { ProjectModule } from './cms/project/project.module';
import { ProductUnitModule } from './master-data/product_unit/product_unit.module';
import { WardsModule } from './master-data/wards/wards.module';
import { CountryModule } from './master-data/country/country.module';
import { OpportunityModule } from './crm/opportunity/opportunity.module';
import { ContactModule } from './crm/contact/contact.module';
import { OrderModule } from './cms/order/order.module';

@Module({
  imports: [
    DatabaseModule,
    AuthModule,
    CategoryModule,
    PostStatusModule,
    PostModule,
    CommentModule,
    DistrictModule,
    BalconydirectionTypeModule,
    FileModule,
    FormalityModule,
    HouseDirestionTypeModule,
    MenuTypeModule,
    NotificationModule,
    NotificationTypeModule,
    PageModule,
    ProductTypeTypeModule,
    TableConfigModule,
    ProvinceCityTypeModule,
    ProductModule,
    AddressModule,
    LeadModule,
    ReadStatusModule,
    MenuTypeModule,
    WidgetModule,
    HashtagModule,
    OrganizationModule,
    CommentModule,
    DashboardModule,
    ReportWidgetModule,
    MessageModule,
    ProjectModule,
    ProductUnitModule,
    WardsModule,
    ProvinceCityTypeModule,
    CountryModule,
    OpportunityModule,
    ContactModule,
    ProjectTypeModule,
    UserModule,
    OrderModule,
    WishlistModule,
    PipelineModule,
  ],
  controllers: [
    ],
  providers: [],
})
export class AppModule { }
