import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm";
import { AddressEntity, FileEntity, ProductTypeEntity } from ".";
import { BalconydirectionEntity } from "./balcony_direction.entity";
import { CityEntity } from "./city.entity";
import { FormalityEntity } from "./fomality.entity";
import { HouseDirestionEntity } from "./house_direstion.entity";
import { ProductUnitTypeEntity } from "./product_unit_type,.entity";
import { ProjectEntity } from "./project.entity";
import { WardsEntity } from "./wards.entity";

@Entity()
export class ProductEntity {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ name: "sub_title", type: "varchar", length: 100 })
    sub_title: string;

    @Column({ name: "title", type: "varchar", length: 512 })
    title: string;

    @Column({ name: "sub_description", type: "varchar", length: 255 })
    sub_description: string;

    @Column({ name: "price", type: "decimal" })
    price: number;

    @OneToMany(() => FileEntity, f => f.productFile)
    files: FileEntity[];

    @OneToMany(() => FileEntity, f => f.productVideo)
    videos: FileEntity[];

    @Column({ name: "formality_id", type: "uuid" })
    formalityId: string;

    @ManyToOne(() => FormalityEntity, f => f.products)
    formality: FormalityEntity;

    @Column({ name: "address_id", type: "uuid" })
    addressId: string;

    @ManyToOne(() => AddressEntity, f => f.products)
    address: AddressEntity;

    @Column({ name: "ward_id", type: "uuid" })
    wardsId: string;

    @ManyToOne(() => WardsEntity, f => f.products)
    wards: WardsEntity;

    @Column({ name: "city_id", type: "uuid" })
    cityId: string;

    @ManyToOne(() => CityEntity, f => f.products)
    city: CityEntity;

    @Column({ name: "product_type", type: "uuid" })
    productTypeId: string;

    @ManyToOne(() => ProductTypeEntity, f => f.products)
    productType: ProductTypeEntity;

    @Column({ name: "project_id", type: "uuid" })
    projectId: string;

    @ManyToOne(() => ProjectEntity, f => f.products)
    project: ProjectEntity;

    @Column({ name: "product_unit_id", type: "uuid" })
    productUnitId: string;

    @ManyToOne(() => ProductUnitTypeEntity, f => f.products)
    productUnitType: ProductUnitTypeEntity;

    @Column({ name: "house_direstion_id", type: "uuid" })
    houseDirestionId: string;


    @ManyToOne(() => HouseDirestionEntity, f => f.products)
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



