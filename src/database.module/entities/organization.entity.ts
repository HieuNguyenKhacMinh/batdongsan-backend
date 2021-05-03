import { PostController } from './../../cms/post/post.controller';
import { PipelineEntity } from './pipeline.entity';
import { UserEntity } from 'src/database.module/entities/User.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, OneToOne, JoinColumn } from "typeorm";
import { AddressEntity } from "./address.entity";
import { ContactEntity } from './contact.entity';
import { LeadEntity } from "./lead.entity";
import { OpportunityEntity } from "./opportunity.entity";
import { NotificationEntity, PostEntity, ProjectEntity } from '.';
import { ProductEntity } from './product.entity';

@Entity()
export class OrganizationEntity {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ name: "name", type: "varchar", length: 100 })
    name: string;

    @Column({ name: "phone_number", type: "int" })
    phoneNumber: string;

    @Column({ name: "email", type: "varchar", length: 100 })
    email: string;

    @Column({ name: "domain", type: "varchar", length: 100 })
    domain: string;

    @Column({ name: "address_id", type: "uuid" })
    addressId:string;

    @Column({ name: "owner_id", type: "uuid" })
    ownerId:string;

    @OneToOne(() => UserEntity, f => f.organizationOwner)
    @JoinColumn({ name: "owner_id" })
    owner: UserEntity;

    @OneToOne(() => AddressEntity, a => a.organization)
    @JoinColumn({name: "address_id"})
    address: AddressEntity;
    
    @OneToMany(() => LeadEntity, l => l.organization)
    leads: LeadEntity[];

    @OneToMany(() => ProductEntity, f => f.organization)
    products: ProductEntity[];

    @OneToMany(() => OpportunityEntity, l => l.organization)
    opportunities: OpportunityEntity[]

    @OneToMany(() => UserEntity, l => l.organization)
    users: UserEntity[]

    @OneToMany(() => ContactEntity, l => l.organization)
    contacts: ContactEntity[]

    @OneToMany(() => PipelineEntity, l => l.organization)
    pipelines: PipelineEntity[]
    
    @OneToMany(() => NotificationEntity, a => a.organization)
    notifications: NotificationEntity[]

    @OneToMany(() => PostEntity, a => a.organization)
    posts: NotificationEntity[]

    @OneToMany(() => ProjectEntity, a => a.organization)
    projects: ProjectEntity[]
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
