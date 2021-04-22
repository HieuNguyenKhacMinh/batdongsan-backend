import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { OrganizationEntity } from "./organization.entity";

@Entity()
export class LeadEntity {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ name: "firsname", type: "varchar", length: 100 })
    firsName: string;

    @Column({ name: "surename", type: "varchar", length: 100 })
    sureName: string;

    @Column({ name: "otherdetails", type: "varchar", length: 100 })
    otherDetails: string;

    @Column({ name: "organization_id", type: "uuid" })
    organizationId: string;

    // @Column({ name: "company_id", type: "uuid" })
    // companyId: string;

    @ManyToOne(()=> OrganizationEntity, o => o.leads)
    @JoinColumn({name: "organization_id"})
    organization: OrganizationEntity;

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











