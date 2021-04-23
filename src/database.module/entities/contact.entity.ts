import { CountryEntity } from 'src/database.module/entities/country.entity';
import { AddressEntity, OrganizationEntity, DistrictEntity, WardsEntity, CityEntity } from 'src/database.module/entities';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";

@Entity()
export class ContactEntity {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ name: "contact_account", type: "varchar", length: 100 })
    contactAccount: string;

    @Column({ name: "name", type: "varchar", length: 100 })
    name: string;

    @Column({ name: "phone_number", type: "varchar", length: 100 })
    phoneNumber: string;

    @Column({ name: "email", type: "varchar", length: 100 })
    email: string;

    @Column({ name: "address_id", type: "uuid", nullable: true })
    addressId: string;

    @ManyToOne(() => AddressEntity, f => f.contacts)
    @JoinColumn({ name: "address_id" })
    address: AddressEntity;

    @Column({ name: "district_id", type: "uuid", nullable: true })
    districtId: string;

    @Column({ name: "country_id", type: "uuid", nullable: true })
    countryId: string;

    @ManyToOne(() => CountryEntity, f => f.contacts)
    @JoinColumn({ name: "country_id" })
    country: CountryEntity;

    @ManyToOne(() => DistrictEntity, f => f.contacts)
    @JoinColumn({ name: "district_id" })
    district: DistrictEntity;

    @Column({ name: "ward_id", type: "uuid", nullable: true })
    wardsId: string;

    @ManyToOne(() => WardsEntity, f => f.contacts)
    @JoinColumn({ name: "ward_id" })
    wards: WardsEntity;

    @Column({ name: "city_id", type: "uuid", nullable: true })
    cityId: string;

    @ManyToOne(() => CityEntity, f => f.contacts)
    @JoinColumn({ name: "city_id" })
    city: CityEntity;


    @Column({ name: "otherdetails", type: "varchar", length: 100,nullable: true })
    otherDetails: string;

    @Column({ name: "contact_details", type: "varchar", length: 100})
    contactDetails: string;

    // @Column({ name: "company_id", type: "uuid",nullable: true })
    // companyId: string;

    @Column({ name: "organization_id", type: "uuid",nullable: true })
    organizationId: string;

    // @ManyToOne(()=> CompanyEntity, o => o.contacts)
    // @JoinColumn({name: "company_id"})
    // company: CompanyEntity;

    @ManyToOne(()=> OrganizationEntity, o => o.contacts)
    @JoinColumn({name: "company_id"})
    organization: OrganizationEntity;


   
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











