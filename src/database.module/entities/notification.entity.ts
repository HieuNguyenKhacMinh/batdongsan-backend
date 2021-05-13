import { OrganizationEntity } from './organization.entity';
import { CommentEntity } from './comment.entity';
import { WishlistEntity } from './wishlist.entity';
import { OpportunityEntity } from './opportunity.entity';
import { LeadEntity } from './lead.entity';
import { ProjectEntity } from './project.entity';
import { ContactEntity } from './contact.entity';
import { ProductEntity } from './product.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { NotificationTypeEntity } from "./notification_type.entity";
import { PostEntity } from '.';
import { UserEntity } from './User.entity';

@Entity()
export class NotificationEntity {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ name: "name", type: "varchar", length: 100,nullable: true  })
    name: string;


    /**
     *  1	thích bài viết
        2	thích sản phẩm
        3	thích dự án
        4	bình luận bài viết
        5	bình luận sản phẩm
        6	bình luận dự án
     */
    @Column({ name: "notification_type", type: "int", nullable: true })
    notificationType: number;

    // @ManyToOne(() => NotificationTypeEntity, d => d.notifications)
    // @JoinColumn({name: "notification_type_id"})
    // notificationType: NotificationTypeEntity;

    @Column({ name: "user_id", type: "uuid", nullable: true })
    userId: string;

    @ManyToOne(() => UserEntity, d => d.leads)
    @JoinColumn({ name: "user_id" })
    user: UserEntity;


    @Column({ name: "post_id", type: "uuid", nullable: true })
    postId: string;

    @ManyToOne(() => PostEntity, d => d.leads)
    @JoinColumn({ name: "post_id" })
    post: PostEntity;


    @Column({ name: "product_id", type: "uuid", nullable: true })
    productId: string;

    @ManyToOne(() => ProductEntity, d => d.notifications)
    @JoinColumn({ name: "product_id" })
    product: ProductEntity;

    @Column({ name: "project_id", type: "uuid", nullable: true })
    projectId: string;

    @ManyToOne(() => ProjectEntity, d => d.notifications)
    @JoinColumn({ name: "project_id" })
    project: ProjectEntity;

    @Column({ name: "contact_id", type: "uuid", nullable: true })
    contactId: string;

    @ManyToOne(() => ContactEntity, d => d.notifications)
    @JoinColumn({ name: "contact_id" })
    contact: ContactEntity;


    @Column({ name: "lead_id", type: "uuid", nullable: true })
    leadId: string;

    @ManyToOne(() => LeadEntity, d => d.notifications)
    @JoinColumn({ name: "lead_id" })
    lead: LeadEntity;

    @Column({ name: "opportunity_id", type: "uuid", nullable: true })
    opportunityId: string;

    @ManyToOne(() => OpportunityEntity, d => d.notifications)
    @JoinColumn({ name: "opportunity_id" })
    opportunity: OpportunityEntity;


    @Column({ name: "wishlist_id", type: "uuid", nullable: true })
    wishlistId: string;

    @ManyToOne(() => WishlistEntity, d => d.notifications)
    @JoinColumn({ name: "wishlist_id" })
    wishlist: WishlistEntity;

    @Column({ name: "organization_id", type: "uuid", nullable: true })
    organizationId: string;


    @ManyToOne(() => OrganizationEntity, o => o.notifications)
    @JoinColumn({ name: "organization_id" })
    organization: OrganizationEntity;

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









