import { OrganizationEntity } from 'src/database.module/entities';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from "typeorm";
import { OpportunityEntity } from './opportunity.entity';

@Entity()
export class PipelineEntity {

    @PrimaryGeneratedColumn("uuid")
    id: number;

    @Column({ name: "name", type: "uuid" })
    name: number;


    @Column({ name: "organization_id", type: "varchar"})
    organizationId: string;


    @ManyToOne(() => OrganizationEntity, f => f.pipelines)
    @JoinColumn({ name: "product_id" })
    organization: OrganizationEntity;


    @OneToMany(() => OpportunityEntity, l => l.pipeline)
    opportunities: OpportunityEntity[]

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





