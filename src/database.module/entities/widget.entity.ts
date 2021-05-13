import { Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn, ManyToOne } from "typeorm";
import { OrganizationEntity } from ".";
import { PostEntity } from "./post.entity";

@Entity()
export class WidgetEntity {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ name: "Subject", type: "varchar", length: 1000,nullable: true  })
    name: string;
    
    @Column({ name: "organization_id", type: "uuid", nullable: true })
    organizationId: string;

    @ManyToOne(() => OrganizationEntity, o => o.widgets)
    @JoinColumn({ name: "organization_id" })
    organization: OrganizationEntity;


    // @OneToMany(() => PostEntity, post => post.widget)
    // posts: PostEntity[];

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