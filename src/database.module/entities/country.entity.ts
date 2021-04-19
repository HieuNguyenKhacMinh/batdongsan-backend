import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { ProductEntity } from ".";
import { CityEntity } from "./city.entity";
import { ProjectEntity } from "./project.entity";

/**
 * Quốc gia
 */
@Entity()
export class CountryEntity {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ name: "name", type: "varchar", length: 50 })
    name: string;

    @OneToMany(() => ProductEntity, p => p.country)
    products: ProductEntity[];

    @OneToMany(() => CityEntity, c => c.country)
    cities: CityEntity[];

    @OneToMany(() => ProjectEntity, c => c.country)
    projects: ProjectEntity[];

   
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