import { OrganizationEntity } from './organization.entity';
import { WishlistEntity } from './wishlist.entity';
import { UserEntity } from 'src/database.module/entities/User.entity';
import { CountryEntity } from 'src/database.module/entities/country.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, JoinColumn, TreeLevelColumn } from "typeorm";
import { AddressEntity, CommentEntity, FileEntity, LeadEntity, NotificationEntity, PostEntity, ProductTypeEntity } from ".";
import { BalconydirectionEntity } from "./balcony_direction.entity";
import { CityEntity } from "./city.entity";
import { DistrictEntity } from "./district.entity";
import { FormalityEntity } from "./fomality.entity";
import { HouseDirestionEntity } from "./house_direstion.entity";
import { ProductUnitTypeEntity } from "./product_unit_type,.entity";
import { ProjectEntity } from "./project.entity";
import { WardsEntity } from "./wards.entity";
import { OrderEntity } from './order.entity';
import { OpportunityEntity } from './opportunity.entity';

@Entity()
export class ProductEntity {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ name: "sub_title", type: "varchar", length: 250, nullable: true })
    subTitle: string;

    @Column({ name: "title", type: "varchar", length: 512, nullable: true })
    title: string;

    @Column({ name: "sub_description", type: "varchar", length: 500, nullable: true })
    subDescription: string;

    @Column({ name: "price", type: "varchar", nullable: true })
    price: string;

    @Column({ name: "organization_id", type: "varchar", nullable: true })
    orgabizationId: string;


    @Column({ name: "is_buy_hire", type: "int", default: 0, nullable: true })
    isBuyHire: number;

    @OneToMany(() => OpportunityEntity, l => l.product)
    opportunities: OpportunityEntity[]

    @OneToMany(() => FileEntity, f => f.productFile)
    files: FileEntity[];

    @OneToMany(() => FileEntity, f => f.productVideo)
    videos: FileEntity[];

    @Column({ name: "formality_id", type: "uuid", nullable: true })
    formalityId: string;

    @ManyToOne(() => FormalityEntity, f => f.products)
    @JoinColumn({ name: "formality_id" })
    formality: FormalityEntity;

    @ManyToOne(() => OrganizationEntity, f => f.products)
    @JoinColumn({name: "organization_id" })
    organization: OrganizationEntity;


    @Column({ name: "address_id", type: "uuid", nullable: true })
    addressId: string;

    @ManyToOne(() => AddressEntity, f => f.products)
    @JoinColumn({ name: "address_id" })
    address: AddressEntity;

    @Column({ name: "district_id", type: "uuid", nullable: true })
    districtId: string;

    @Column({ name: "country_id", type: "uuid", nullable: true })
    countryId: string;

    @ManyToOne(() => CountryEntity, f => f.products)
    @JoinColumn({ name: "country_id" })
    country: CountryEntity;

    @ManyToOne(() => DistrictEntity, f => f.products)
    @JoinColumn({ name: "district_id" })
    district: DistrictEntity;

    @Column({ name: "ward_id", type: "uuid", nullable: true })
    wardsId: string;

    @ManyToOne(() => WardsEntity, f => f.products)
    @JoinColumn({ name: "ward_id" })
    wards: WardsEntity;

    @Column({ name: "city_id", type: "uuid", nullable: true })
    cityId: string;

    @ManyToOne(() => CityEntity, f => f.products)
    @JoinColumn({ name: "city_id" })
    city: CityEntity;

    @Column({ name: "product_type_id", type: "uuid", nullable: true })
    productTypeId: string;

    @ManyToOne(() => ProductTypeEntity, f => f.products)
    @JoinColumn({ name: "product_type_id" })
    productType: ProductTypeEntity;

    @Column({ name: "project_id", type: "uuid", nullable: true })
    projectId: string;

    @ManyToOne(() => ProjectEntity, f => f.products)
    @JoinColumn({ name: "project_id" })
    project: ProjectEntity;

    @Column({ name: "product_unit_id", type: "uuid", nullable: true })
    productUnitId: string;

    @ManyToOne(() => ProductUnitTypeEntity, f => f.products)
    @JoinColumn({ name: "product_unit_id" })
    productUnitType: ProductUnitTypeEntity;

    @Column({ name: "house_direstion_id", type: "uuid", nullable: true })
    houseDirestionId: string;

    @ManyToOne(() => HouseDirestionEntity, f => f.products)
    @JoinColumn({ name: "house_direstion_id" })
    houseDirestion: HouseDirestionEntity;

    @OneToMany(() => OrderEntity, p => p.product)
    orders: UserEntity[];

    @Column({ name: "acreage", type: "decimal", nullable: true })
    acreage: number;

    @Column({ name: "facade", type: "decimal", nullable: true })
    facade: number;

    @Column({ name: "entry_width", type: "decimal", nullable: true })
    entryWidth: number;

    @Column({ name: "balcony_direction_id", type: "uuid", nullable: true })
    balconyDirectionId: string;

    @ManyToOne(() => BalconydirectionEntity, f => f.products)
    @JoinColumn({ name: "balcony_direction_id" })
    balconyDirection: BalconydirectionEntity;

    @OneToMany(() => WishlistEntity, p => p.product)
    wishlists: WishlistEntity[];

    @Column({ name: "no_of_bedroom", type: "int", nullable: true })
    noOfBedroom: number;

    @Column({ name: "no_of_toilet", type: "int", nullable: true })
    noOfToilet: number;

    @Column({ name: "no_of_floor", type: "int", nullable: true })
    noOfFloors: number;

    @Column({ name: "juridical", type: "int", nullable: true })
    juridical: number;

    @Column({ name: "contact_name", type: "varchar", nullable: true })
    contactName: string;


    @Column({ name: "phone_number", type: "varchar", nullable: true })
    phoneNumber: string;

    @Column({ name: "Email", type: "varchar", nullable: true })
    email: string;

    @Column({ name: "home_number", type: "varchar", nullable: true })
    homeNumber: string;

    @Column({ name: "street", type: "varchar", nullable: true })
    street: string;

    @OneToMany(() => LeadEntity, l => l.product)
    leads: LeadEntity[]

    @OneToMany(() => NotificationEntity, l => l.product)
    notifications: NotificationEntity[]

    @OneToMany(() => PostEntity, l => l.product)
    posts: PostEntity[]

    
    @OneToMany(() => CommentEntity, l => l.product)
    comments: CommentEntity[]
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



