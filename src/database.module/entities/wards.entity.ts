import { ContactEntity } from 'src/database.module/entities';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, JoinColumn } from "typeorm";
import { ProductEntity } from ".";
import { AddressEntity } from "./address.entity";
import { DistrictEntity } from "./district.entity";
import { ProjectEntity } from "./project.entity";

@Entity()
export class WardsEntity {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ name: "name", type: "varchar", length: 100 })
    name: string;

    @Column({ name: "district_id", type: "uuid" })
    districtId: string;

    @ManyToOne(() => DistrictEntity, d => d.wards)
    @JoinColumn({ name: "district_id"})
    district: DistrictEntity;

    @OneToMany(() => ProductEntity, p => p.wards)
    products: ProductEntity[];

    @OneToMany(() => AddressEntity, a => a.wards)
    addresses: AddressEntity[]

    @OneToMany(() => ProjectEntity, a => a.wards)
    projects: ProjectEntity[]

    @OneToMany(() => ContactEntity, c => c.wards)
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