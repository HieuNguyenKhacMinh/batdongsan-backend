import { PostStatusController } from './cms/post_status/post_status.controller';
import { PostStatusModule } from './cms/post_status/post_status.module';
import { PostModule } from './cms/post/post.module';
import { CategoryModule } from './cms/category/category.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database.module/database.module';
import { BalconydirectionTypeModule } from './cms/balcony-direction/balcony-direction.module';
import { FileModule } from './cms/file/file.module';
import { FormalityModule } from './cms/formality/formality.module';
import { HashtagModule } from './cms/hashtag/hashtag.module';
import { HouseDirestionTypeModule } from './cms/house_direstion/housedirection.module';
import { MenuTypeModule } from './cms/menu/menu.module';
import { NotificationModule } from './cms/notification/notification.module';
import { NotificationTypeModule } from './cms/notification_type/notification_type.module';
import { PageModule } from './cms/page/page.module';
import { ProductTypeTypeModule } from './cms/product_type/product_type.module';
import { DistrictModule } from './cms/district/district.module';
import { CommentModule } from './cms/comment/comment.module';
import { TableConfigModule } from './cms/table_config/table_config.module';
import { ProvinceCityTypeModule } from './cms/province_city/province_city.module';
import { ProductModule } from './cms/product/product.module';
import { AddressModule } from './cms/address/address.module';
import { LeadModule } from './cms/lead/lead.module';
import { ReadStatusModule } from './cms/read_status/read_status.module';
import { WidgetModule } from './cms/widget/widget.module';
import { OrganizationModule } from './cms/organization/organization.module';
import { DashboardModule } from './cms/dashboard/dashboard.module';
import { ReportWidgetModule } from './cms/report_widget/report_widget.module';
import { MessageModule } from './cms/message/message.module';
import { ProjectModule } from './cms/project/project.module';
import { ProductUnitModule } from './cms/product_unit/product_unit.module';
import { WardsModule } from './cms/wards/wards.module';
import { CountryModule } from './cms/country/country.module';

@Module({
  imports: [
    CategoryModule,
    PostStatusModule,
    PostModule,
    CommentModule,
    DatabaseModule,
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
  ],
  controllers: [
    ],
  providers: [],
})
export class AppModule { }
