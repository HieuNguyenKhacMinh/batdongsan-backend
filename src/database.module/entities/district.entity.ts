import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn } from "typeorm";
import { AddressEntity } from ".";
import { CityEntity } from "./city.entity";
import { ContactEntity } from "./contact.entity";
import { ProductEntity } from "./product.entity";
import { ProjectEntity } from "./project.entity";
import { WardsEntity } from "./wards.entity";

/**
 * Quận/ Huyện/ Thị xã/ Thành phố thuộc tỉnh/ Thành phố thuộc thành phố trực thuộc trung ương
 */
@Entity()
export class DistrictEntity {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ name: "name", type: "varchar", length: 100 })
    name: string;

    @Column({ name: "city_id", type: "uuid" })
    cityId: string;

    @ManyToOne(() => CityEntity, f => f.districts)
    @JoinColumn({ name: "city_id" })
    city: CityEntity;

    @OneToMany(() => WardsEntity, w => w.district)
    wards: WardsEntity[];

    @OneToMany(() => AddressEntity, a => a.district)
    addresses: AddressEntity[]


    @OneToMany(() => ProductEntity, p => p.district)
    products: ProductEntity[];

    @OneToMany(() => ProjectEntity, p => p.district)
    projects: ProjectEntity[];

    @OneToMany(() => ContactEntity, p => p.district)
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