import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, OneToOne, JoinColumn } from "typeorm";
import { ProductEntity } from ".";
import { CityEntity } from "./city.entity";
import { DistrictEntity } from "./district.entity";
import { OrganizationEntity } from "./organization.entity";
import { WardsEntity } from "./wards.entity";

@Entity()
export class AddressEntity {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ name: "home_number", type: "varchar", length: 100 })
    homeNumber: string;

    @Column({ name: "street", type: "varchar", length: 100 })
    street: string;

    @Column({ name: "wards_id", type: "uuid" })
    wardsId: string;

    @ManyToOne(() => WardsEntity, w => w.addresses)
    @JoinColumn({ name: "wards_id" })
    wards: WardsEntity;

    @Column({ name: "city_id", type: "uuid" })
    cityId: string;

    @ManyToOne(() => CityEntity, c => c.addresses)
    @JoinColumn({ name: "city_id" })
    city: CityEntity;

    @Column({ name: "district_id", type: "uuid" })
    districtId: string;

    @ManyToOne(() => DistrictEntity, d => d.addresses)
    @JoinColumn({ name: "district_id" })
    district: DistrictEntity;

    @OneToMany(() => ProductEntity, p => p.address)
    products: ProductEntity[];

    @OneToOne(() => OrganizationEntity, o => o.address)
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
