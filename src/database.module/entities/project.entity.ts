import { CountryEntity } from 'src/database.module/entities/country.entity';
import { DistrictEntity, WardsEntity, AddressEntity } from 'src/database.module/entities';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, JoinTable, JoinColumn } from "typeorm";
import { ProductEntity } from ".";
import { CityEntity } from "./city.entity";
import { ProjectTypeEntity } from "./project_type.entity";

@Entity()
export class ProjectEntity {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ name: "name", type: "varchar", length: 100 })
    name: string;

    //Dơn vị phân phối 
    @Column({ name: "distribution_unit", type: "varchar" })
    distributionUnit: string;

    //Tổng diện tích
    @Column({ name: "total_area", type: "decimal" })
    totalArea: number;

    @Column({ name: "street", type: "varchar", length: 100 })
    street: string;

    @Column({ name: "home_number", type: "int" })
    homeNumber: number;

    @Column({ name: "latitude", type: "decimal" })
    latitude: number;

    @Column({ name: "longitude", type: "decimal" })
    longitude: number;

    @Column({ name: "overview", type: "longtext" })
    overview: string;

    @Column({ name: "infrastructure_location", type: "longtext", nullable: true })
    infrastructureLocation: string; // Vị trí hạ tầng

    @Column({ name: "infrastructure_design", type: "longtext", nullable: true })
    infrastructureDesign: string;

    @Column({ name: "photo_library", type: "varchar", nullable: true })
    photoLibrary: string;

    @Column({ name: 'description', type: 'longtext', nullable: true })
    description: string;

    @Column({ name: "p_city_id", type: "uuid" })
    cityId: string;

    @Column({ name: "p_district_id", type: "uuid", nullable: true })
    districtId: string;

    @Column({ name: "p_wards_id", type: "uuid" })
    wardsId: string;

    @Column({ name: "p_address_id", type: "uuid" })
    addressId: string;

    @Column({ name: "p_country_id", type: "uuid" })
    countryId: string;

    @ManyToOne(() => CountryEntity, f => f.projects)
    @JoinColumn({ name: "p_country_id" })
    country: CountryEntity;

    @ManyToOne(() => CityEntity, f => f.projects, { eager: true })
    @JoinColumn({ name: "p_city_id" })
    city: CityEntity;

    @ManyToOne(() => WardsEntity, w => w.projects, { eager: true })
    @JoinColumn({ name: "p_wards_id" })
    wards: WardsEntity;

    @ManyToOne(() => DistrictEntity, d => d.projects, { eager: true })
    @JoinColumn({ name: "p_district_id" })
    district: DistrictEntity;



    @ManyToOne(() => AddressEntity, f => f.projects, { eager: true })
    @JoinColumn({ name: "p_address_id" })
    address: AddressEntity;

    @OneToMany(() => ProductEntity, p => p.project, { eager: true })
    products: ProductEntity[];

    @Column({ name: "p_project_type_id", type: "uuid", nullable: true })
    projectTypeId: string;

    @ManyToOne(() => ProjectTypeEntity, f => f.projects, { eager: true })
    @JoinColumn({ name: "p_project_type_id" })
    projectType: ProjectTypeEntity;
    /**
     * Description
     */

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