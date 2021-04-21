import { AddressEntity } from 'src/database.module/entities';
import { CompanyEntity } from './company.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";

@Entity()
export class ContactEntity {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ name: "contact_account", type: "varchar", length: 100 })
    contactAccount: string;

    @Column({ name: "otherdetails", type: "varchar", length: 100,nullable: true })
    otherDetails: string;

    @Column({ name: "contact_details", type: "varchar", length: 100})
    contactDetails: string;

    @Column({ name: "company_id", type: "uuid",nullable: true })
    companyId: string;

    @ManyToOne(()=> CompanyEntity, o => o.contacts)
    @JoinColumn({name: "company_id"})
    company: CompanyEntity;

    @Column({ name: "address_id", type: "uuid",nullable: true })
    addressId: string;

    @ManyToOne(()=> AddressEntity, o => o.contacts)
    @JoinColumn({name: "address_id"})
    address: AddressEntity;

   
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











