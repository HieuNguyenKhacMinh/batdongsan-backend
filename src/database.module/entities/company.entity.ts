import { UserEntity } from '../entities/User.entity';
import { LeadEntity, ContactEntity } from 'src/database.module/entities';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { OpportunityEntity } from './opportunity.entity';

@Entity()
export class CompanyEntity {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ name: "company_name", type: "varchar", length: 100 })
    companyName: string;

    @Column({ name: "company_descrition_status", type: "varchar", length: 1024 })
    companyDescritionStatus: string;

    @Column({ name: "phone_number", type: "varchar", length: 50 })
    phoneNumber: string;

    @Column({ name: "address", type: "varchar", length: 255})
    address: string;

    @Column({ name: "email", type: "varchar", length: 100 })
    email: string;
    
    @OneToMany(() => LeadEntity, l => l.company)
    leads: LeadEntity[];

    @OneToMany(() => OpportunityEntity, l => l.company)
    opportunities: OpportunityEntity[];

    @OneToMany(() => UserEntity, l => l.company)
    users: UserEntity[];

    @OneToMany(() => ContactEntity, l => l.company)
    contacts: ContactEntity[];

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








