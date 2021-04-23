import { ContactEntity } from 'src/database.module/entities';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, JoinColumn } from "typeorm";
import { ProductEntity } from ".";
import { AddressEntity } from "./address.entity";
import { CountryEntity } from "./country.entity";
import { DistrictEntity } from "./district.entity";
import { ProjectEntity } from "./project.entity";

/**
 * Tỉnh/ Thành phố trực thuộc trung ương
 */
@Entity()
export class CityEntity {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ name: "name", type: "varchar", length: 50 })
    name: string;

    @OneToMany(() => ProductEntity, p => p.city)
    products: ProductEntity[];

    @OneToMany(() => ProjectEntity, p => p.city)
    projects: ProjectEntity[];

    @Column({ name: "country_id", type: "uuid" })
    countryId: string;

    @ManyToOne(() => CountryEntity, c => c.cities)
    @JoinColumn({ name: "country_id" })
    country: CountryEntity;
    
    @OneToMany(() => AddressEntity, a => a.city)
    addresses: AddressEntity[]

    @OneToMany(() => DistrictEntity, a => a.city)
    districts: DistrictEntity[]

    @OneToMany(() => ContactEntity, c => c.city)
    contacts: ContactEntity[];

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