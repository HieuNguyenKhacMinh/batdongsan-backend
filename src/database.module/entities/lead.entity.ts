import { UserEntity } from 'src/database.module/entities/User.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from "typeorm";
import { NotificationEntity } from '.';
import { ContactEntity } from './contact.entity';
import { OrganizationEntity } from "./organization.entity";
import { PostEntity } from './post.entity';
import { ProductEntity } from './product.entity';
import { ProjectEntity } from './project.entity';

@Entity()
export class LeadEntity {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ name: "firsname", type: "varchar", length: 100 ,nullable:true })
    firsName: string;

    @Column({ name: "surename", type: "varchar", length: 100,nullable:true  })
    sureName: string;

    @Column({ name: "otherdetails", type: "varchar", length: 100 ,nullable:true })
    otherDetails: string;

    @Column({ name: "organization_id", type: "uuid",nullable:true  })
    organizationId: string;

    @Column({ name: "user_id", type: "uuid",nullable:true })
    userId: string;

    @ManyToOne(() => UserEntity, d => d.leads)
    @JoinColumn({name: "user_id"})
    user: UserEntity;

    
    @Column({ name: "post_id", type: "uuid",nullable:true  })
    postId: string;

    @ManyToOne(() => PostEntity, d => d.leads)
    @JoinColumn({name: "post_id"})
    post: PostEntity;


    @Column({ name: "product_id", type: "uuid",nullable:true  })
    productId: string;

    @ManyToOne(() => ProductEntity, d => d.leads)
    @JoinColumn({name: "product_id"})
    product: ProductEntity;

    @Column({ name: "project_id", type: "uuid",nullable:true })
    projectId: string;

    @ManyToOne(() => ProjectEntity, d => d.leads)
    @JoinColumn({name: "project_id"})
    project: ProjectEntity;

    @Column({ name: "contact_id", type: "uuid",nullable:true  })
    contactId: string;

    @ManyToOne(() => ContactEntity, d => d.leads)
    @JoinColumn({name: "contact_id"})
    contact: ContactEntity;

    

    
    

    // @Column({ name: "company_id", type: "uuid" })
    // companyId: string;

    @ManyToOne(()=> OrganizationEntity, o => o.leads)
    @JoinColumn({name: "organization_id"})
    organization: OrganizationEntity;


    @OneToMany(() => NotificationEntity, a => a.lead)
    notifications: NotificationEntity[]

    // @ManyToOne(()=> OrganizationEntity, o => o.leads)
    // @JoinColumn({name: "company_id"})
    // company: OrganizationEntity;

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











