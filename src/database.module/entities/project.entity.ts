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

    @Column({ name: "city_id", type: "uuid" })
    cityId: string;

    @ManyToOne(() => CityEntity, f => f.projects)
    @JoinColumn({name: "city_id"})
    city: CityEntity;
    
    @OneToMany(() => ProductEntity, p => p.project)
    products: ProductEntity[];

    @Column({ name: "project_type_id", type: "uuid", nullable: true })
    projectTypeId: string;

    @ManyToOne(() => ProjectTypeEntity, f => f.projects)
    @JoinColumn({name: "project_type_id"})
    projectType: ProjectTypeEntity;
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