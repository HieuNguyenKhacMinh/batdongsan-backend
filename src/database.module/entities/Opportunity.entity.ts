import { UserEntity } from 'src/database.module/entities/User.entity';
import { CommentEntity, NotificationEntity } from 'src/database.module/entities';
import { PipelineEntity } from './pipeline.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from "typeorm";
import { OrganizationEntity } from "./organization.entity";
import { ProductEntity, ProjectEntity } from '.';

@Entity()
export class OpportunityEntity {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ name: "name", type: "varchar", length: 100 })
    name: string;

    @Column({ name: "otherdetails", type: "varchar", length: 100 })
    otherDetails: string;

    @Column({ name: "value", type: "int", default: 0 })
    value: number;

    @Column({ name: "unit", type: "int", default: 0 })
    unit: number;


    @Column({ name: "organization_id", type: "uuid" })
    organizationId: string;

    @Column({ name: "pipeline_id", type: "uuid" })
    pipelineId: string;


    @Column({ name: "product_id", type: "uuid" })
    productId: string;

    @ManyToOne(() => ProductEntity, f => f.opportunities)
    @JoinColumn({ name: "product_id" })
    product: ProductEntity;


    @Column({ name: "assignee_id", type: "uuid", nullable: true })
    assignee_id: string;

    @ManyToOne(() => UserEntity, f => f.opportunities)
    @JoinColumn({ name: "assignee_id" })
    assignee: UserEntity;



    @Column({ name: "project_id", type: "uuid", nullable: true })
    projectId: string;

    @ManyToOne(() => ProjectEntity, f => f.opportunities)
    @JoinColumn({ name: "project_id" })
    project: ProjectEntity;


    @ManyToOne(() => OrganizationEntity, o => o.opportunities)
    @JoinColumn({ name: "organization_id" })
    organization: OrganizationEntity;


    @ManyToOne(() => PipelineEntity, o => o.opportunities)
    @JoinColumn({ name: "pipeline_id" })
    pipeline: PipelineEntity;


    @OneToMany(() => CommentEntity, c => c.opportunity, { eager: true })
    comments: CommentEntity[];

    @OneToMany(() => NotificationEntity, a => a.opportunity)
    notifications: NotificationEntity[]


    // @ManyToOne(()=> CompanyEntity, o => o.opportunities)
    // @JoinColumn({name: "company_id"})
    // company: CompanyEntity;

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











