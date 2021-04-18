import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { CompanyEntity } from "./company.entity";

@Entity()
export class UserEntity {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ name: "full_name", type: "varchar", length: 100 })
    full_name: string;

    @Column({ name: "gender", type: "varchar", length: 25 })
    gender: string;

    @Column({ name: "birthday", type: "date" })
    birthday: Date;

    @Column({ name: "phone_number", type: "int" })
    phone_number: string;

    @Column({ name: "email", type: "varchar", length: 100 })
    email: string;

    @Column({ name: "user_name", type: "varchar", length: 100 })
    user_name: string;

    @Column({ name: "password", type: "varchar", length: 100 })
    password: string;

    @Column({ name: "company_id", type: "uuid" })
    companyId: string;

    @ManyToOne(()=> CompanyEntity, o => o.users)
    @JoinColumn({name: "company_id"})
    company: CompanyEntity;

   
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











