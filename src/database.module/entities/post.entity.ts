import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany, ManyToMany, JoinTable } from "typeorm";
import { CategoryEntity } from "./category.entity";
import { CommentEntity } from "./comment.entity";
import { HashtagEntity } from "./hashtag.entity";
import { WidgetEntity } from "./widget.entity";

@Entity()
export class PostEntity {

    @PrimaryGeneratedColumn("uuid")
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

    @Column({ name: "page_id", type: "uuid", nullable: true })
    pageId: string;

    // @ManyToOne(() => PageEntity, f => f.posts)
    // page: PageEntity;

    @OneToMany(() => CommentEntity, c => c.post, {eager: true })
    comments: CommentEntity[];
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

    @Column({ name: 'SiteId', type: 'char', length: 64, nullable: true })
    public siteId: string;
    /**
     * Update Date
     */
    @Column({ name: 'last_update_date', type: 'timestamp', nullable: true, default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
    public lastUpdateDate: string;

}