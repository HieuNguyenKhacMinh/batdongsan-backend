import { ProjectEntity } from 'src/database.module/entities';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { PostEntity, ProductEntity } from ".";

@Entity()
export class FileEntity {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ name: "name", type: "varchar",length: 100 })
    name: string;

    @Column({ name: "path", type: "varchar", length: 100 })
    path: string;

    @Column({ name: "product_id", type: "varchar", length: 100, nullable: true })
    productId: string;

    @ManyToOne(() => ProductEntity, p => p.files)
    @JoinColumn({name: "product_id"})
    product: ProductEntity;

    @Column({ name: "project_id", type: "varchar", length: 100, nullable: true })
    projectId: string;

    @Column({ name: "type", type: "int", default:0, nullable: true })
    type: number;

    @ManyToOne(() => ProjectEntity, p => p.files)
    @JoinColumn({name: "project_id"})
    project: ProjectEntity;


    @Column({ name: "post_id", type: "varchar", length: 100, nullable: true })
    postId: string;

    @ManyToOne(() => PostEntity, p => p.files)
    @JoinColumn({name: "post_id"})
    post: PostEntity;

    

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
