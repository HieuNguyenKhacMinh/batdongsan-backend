import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from "typeorm";
import { CategoryEntity } from "./category.entity";
import { CommentEntity } from "./comment.entity";
import { WidgetEntity } from "./widget.entity";

@Entity()
export class PostEntity {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ name: "title", type: "varchar", length: 250 })
    title: string;

    @Column({ name: "content", type: "text" })
    content: string;
 
    // @Column({ name: "hashtag_id", type: "uuid" })
    // hashtagId: number;

    @Column({ name: "category_id", type: "uuid" })
    categoryId: string;

    @ManyToOne(() => CategoryEntity, f => f.posts)
    @JoinColumn({ name: "category_id" })
    category: CategoryEntity;

    @Column({ name: "widget_id", type: "uuid", nullable: true })
    widgetId: string;

    // @ManyToOne(() => WidgetEntity, widget => widget.posts)
    // @JoinColumn({ name: "widget_id" })
    // widget: WidgetEntity;

    @Column({ name: "status_id", type: "uuid" })
    statusId: string;

    @Column({ name: "page_id", type: "uuid", nullable: true })
    pageId: number;

    // @ManyToOne(() => PageEntity, f => f.posts)
    // page: PageEntity;

    @OneToMany(() => CommentEntity, c => c.post)
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