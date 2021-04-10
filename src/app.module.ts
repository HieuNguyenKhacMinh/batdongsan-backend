import { PostStatusController } from './cms/status/post_status.controller';
import { PostStatusModule } from './cms/status/post_status.module';
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
import { ProductTypeTypeModule } from './cms/product-type/product_type.module';
import { DistrictModule } from './cms/district/district.module';
import { CommentModule } from './cms/comment/comment.module';

@Module({
  imports: [
    CategoryModule,
    PostStatusModule,
    PostModule,
    HashtagModule,
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
  ],
  controllers: [
    ],
  providers: [],
})
export class AppModule { }
