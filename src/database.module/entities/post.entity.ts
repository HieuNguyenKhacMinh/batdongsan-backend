import { LeadEntity, NotificationEntity, OrganizationEntity } from 'src/database.module/entities';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany, ManyToMany, JoinTable, PrimaryColumn } from "typeorm";
import { CategoryEntity } from "./category.entity";
import { CommentEntity } from "./comment.entity";
import { HashtagEntity } from "./hashtag.entity";
import { PostStatusEntity } from "./post_status.entity";

@Entity()
export class PostEntity {

    @PrimaryGeneratedColumn("uuid")
    @PrimaryColumn({ name: "id" })
    id: string;

    @Column({ name: "title", type: "varchar", length: 250, nullable: true })
    title: string;

    @Column({ name: "content", type: "text", nullable: true })
    content: string;

    @ManyToMany(() => HashtagEntity, { eager: true })
    @JoinTable()
    hashtags: HashtagEntity[];

    @Column({ name: "category_id", type: "uuid", nullable: true })
    categoryId: string;

    @Column({ name: "hashtag_id", type: "uuid", nullable: true })
    hashtagId: string;

    @ManyToOne(() => CategoryEntity, f => f.posts)
    @JoinColumn({ name: "category_id" })
    category: CategoryEntity;

    @Column({ name: "widget_id", type: "uuid", nullable: true })
    widgetId: string;

    // @ManyToOne(() => WidgetEntity, widget => widget.posts)
    // @JoinColumn({ name: "widget_id" })
    // widget: WidgetEntity;

    @Column({ name: "status_id", type: "uuid", nullable: true })
    statusId: string;

    @ManyToOne(() => PostStatusEntity, f => f.posts)
    @JoinColumn({ name: "status_id" })
    status: PostStatusEntity;

    @Column({ name: "page_id", type: "uuid", nullable: true })
    pageId: string;


    @Column({ name: "sub_content", type: "varchar", nullable: true })
    subContent: string;
    // @ManyToOne(() => PageEntity, f => f.posts)
    // page: PageEntity;

    @OneToMany(() => CommentEntity, c => c.post)
    comments: CommentEntity[];

    @OneToMany(() => LeadEntity, l => l.post)
    leads: LeadEntity[]

    @OneToMany(() => NotificationEntity, l => l.post)
    notifications: NotificationEntity[]

    
    @Column({ name: "organization_id", type: "uuid",nullable:true  })
    organizationId: string;

    @ManyToOne(() => OrganizationEntity, o => o.posts)
    @JoinColumn({ name: "organization_id" })
    organization: OrganizationEntity;


    // /**
    //  * Name
    //  */
    // @Column({ name: 'name', type: 'varchar', length: 255, nullable: true })
    // public Name: string;

    /**
     * Description
     */
    @Column({ name: 'description', type: 'longtext', nullable: true })
    public description: string;

    /**
     * Delete Flag
     */
    @Column({ name: 'delete_flag', type: 'tinyint', nullable: true, default: 0 })
    public deleteFlag: number;

    /**
     * Created By
     */
    @Column({ name: 'created_by', type: 'char', length: 64, nullable: true })
    public createdBy: string;

    /**
     * Created Date
     */
    @Column({ name: 'created_date', type: 'timestamp', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
    public createdDate: string;

    /**
     * Last Updated By
     */
    @Column({ name: 'last_updated_by', type: 'char', length: 64, nullable: true })
    public lastUpdatedBy: string;

    @Column({ name: 'site_id', type: 'char', length: 64, nullable: true })
    public siteId: string;
    /**
     * Update Date
     */
    @Column({ name: 'last_update_date', type: 'timestamp', nullable: true, default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
    public lastUpdateDate: string;

}