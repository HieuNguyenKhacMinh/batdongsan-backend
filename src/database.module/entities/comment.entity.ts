import { UserEntity } from 'src/database.module/entities/User.entity';
import { OpportunityEntity } from 'src/database.module/entities/opportunity.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany, Tree, TreeParent, TreeChildren } from "typeorm";
import { PostEntity } from "./post.entity";
import { ProductEntity } from './product.entity';

@Entity()
export class CommentEntity {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ name: "content", type: "varchar", length: 1000 })
    content: string;

    @Column({ name: "post_id", type: "uuid", nullable: true })
    postId: string;

    @ManyToOne(() => PostEntity, f => f.comments, { eager: false })
    @JoinColumn({ name: "post_id" })
    post: PostEntity;

    @Column({ name: "product_id", type: "uuid", nullable: true })
    productId: string;

    @ManyToOne(() => ProductEntity, f => f.comments, { eager: false })
    @JoinColumn({ name: "product_id" })
    product: ProductEntity;

    @Column({ name: "opportunity_id", type: "uuid", nullable: true })
    opportunityId: string;

    @ManyToOne(() => OpportunityEntity, f => f.comments)
    @JoinColumn({ name: "opportunity_id" })
    opportunity: OpportunityEntity;

    @Column({ name: "parent_id", type: "uuid", nullable: true })
    parentId: string;

    @TreeChildren()
    children: CommentEntity[];

    @TreeParent()
    @JoinColumn({ name: "parent_id" })
    parent: CommentEntity;
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


    @ManyToOne(() => UserEntity, f => f.comments)
    @JoinColumn({ name: "created_by" })
    createdByUser: UserEntity;

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










