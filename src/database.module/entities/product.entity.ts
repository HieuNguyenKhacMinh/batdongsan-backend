import { CountryEntity } from 'src/database.module/entities/country.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, JoinColumn, TreeLevelColumn } from "typeorm";
import { AddressEntity, FileEntity, ProductTypeEntity } from ".";
import { BalconydirectionEntity } from "./balcony_direction.entity";
import { CityEntity } from "./city.entity";
import { DistrictEntity } from "./district.entity";
import { FormalityEntity } from "./fomality.entity";
import { HouseDirestionEntity } from "./house_direstion.entity";
import { ProductUnitTypeEntity } from "./product_unit_type,.entity";
import { ProjectEntity } from "./project.entity";
import { WardsEntity } from "./wards.entity";

@Entity()
export class ProductEntity {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ name: "sub_title", type: "varchar", length: 250 })
    subTitle: string;

    @Column({ name: "title", type: "varchar", length: 512 })
    title: string;

    @Column({ name: "sub_description", type: "varchar", length: 500 })
    subDescription: string;

    @Column({ name: "price", type: "decimal" })
    price: number;

    @OneToMany(() => FileEntity, f => f.productFile)
    files: FileEntity[];

    @OneToMany(() => FileEntity, f => f.productVideo)
    videos: FileEntity[];

    @Column({ name: "formality_id", type: "uuid" })
    formalityId: string;

    @ManyToOne(() => FormalityEntity, f => f.products)
    @JoinColumn({ name: "formality_id" })
    formality: FormalityEntity;

    @Column({ name: "address_id", type: "uuid" })
    addressId: string;

    @ManyToOne(() => AddressEntity, f => f.products)
    @JoinColumn({ name: "address_id" })
    address: AddressEntity;

    @Column({ name: "district_id", type: "uuid" })
    districtId: string;

    @Column({ name: "country_id", type: "uuid" })
    countryId: string;

    @ManyToOne(() => CountryEntity, f => f.products)
    @JoinColumn({ name: "country_id" })
    country: CountryEntity;

    @ManyToOne(() => DistrictEntity, f => f.products)
    @JoinColumn({ name: "district_id" })
    district: DistrictEntity;

    @Column({ name: "ward_id", type: "uuid" })
    wardsId: string;

    @ManyToOne(() => WardsEntity, f => f.products)
    @JoinColumn({ name: "ward_id" })
    wards: WardsEntity;

    @Column({ name: "city_id", type: "uuid" })
    cityId: string;

    @ManyToOne(() => CityEntity, f => f.products)
    @JoinColumn({ name: "city_id" })
    city: CityEntity;

    @Column({ name: "product_type_id", type: "uuid" })
    productTypeId: string;

    @ManyToOne(() => ProductTypeEntity, f => f.products)
    @JoinColumn({ name: "product_type_id" })
    productType: ProductTypeEntity;

    @Column({ name: "project_id", type: "uuid", nullable: true  })
    projectId: string;

    @ManyToOne(() => ProjectEntity, f => f.products)
    @JoinColumn({ name: "project_id" })
    project: ProjectEntity;

    @Column({ name: "product_unit_id", type: "uuid" })
    productUnitId: string;

    @ManyToOne(() => ProductUnitTypeEntity, f => f.products)
    @JoinColumn({ name: "product_unit_id" })
    productUnitType: ProductUnitTypeEntity;

    @Column({ name: "house_direstion_id", type: "uuid" })
    houseDirestionId: string;

    @ManyToOne(() => HouseDirestionEntity, f => f.products)
    @JoinColumn({ name: "house_direstion_id" })
    houseDirestion: HouseDirestionEntity;

    @Column({ name: "acreage", type: "decimal" })
    acreage: number;

    @Column({ name: "facade", type: "decimal" })
    facade: number;

    @Column({ name: "entry_width", type: "decimal" })
    entryWidth: number;

    @Column({ name: "balcony_direction_id", type: "uuid" })
    balconyDirectionId: string;

    @ManyToOne(() => BalconydirectionEntity, f => f.products)
    @JoinColumn({ name: "balcony_direction_id" })
    balconyDirection: BalconydirectionEntity;

    @Column({ name: "no_of_bedroom", type: "int" })
    noOfBedroom: number;

    @Column({ name: "no_of_toilet", type: "int" })
    noOfToilet: number;

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



