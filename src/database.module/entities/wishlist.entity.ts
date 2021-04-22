import { UserEntity } from 'src/database.module/entities/User.entity';
import { ProductEntity } from 'src/database.module/entities';
import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, ManyToOne, JoinColumn } from "typeorm";
import { PostEntity } from ".";

@Entity()
export class WishlistEntity {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ name: "user_id", type: "uuid" })
    userId: string;

    @Column({ name: "product_id", type: "uuid" })
    productId: string;

    @ManyToOne(() => ProductEntity, f => f.wishlists)
    @JoinColumn({ name: "product_id" })
    product: ProductEntity;

    @ManyToOne(() => UserEntity, f => f.wishlists)
    @JoinColumn({ name: "user_id" })
    user: UserEntity;

    @ManyToMany(()=> PostEntity, p => p.hashtags)
    posts: PostEntity[];
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
