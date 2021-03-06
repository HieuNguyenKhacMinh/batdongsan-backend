import { UserEntity } from 'src/database.module/entities/User.entity';
import { ProductEntity } from 'src/database.module/entities';
import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, ManyToOne } from "typeorm";

@Entity()
export class OrderEntity {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ name: "user_id", type: "varchar"})
    userId: string;

    @Column({ name: "product_id", type: "uuid"})
    productId: string;

    @Column({ name: "NgayBan", type: "varchar", length: 1024 })
    ngayBan: string;

    @Column({ name: "GiaTien", type: "decimal" })
    giaTien: number;

    @Column({ name: "Vat", type: "decimal", nullable : true }) // Thuế
    vat: number;

    @Column({ name: "Thành tiền", type: "decimal", nullable:true })
    thanhTien: number;

    @ManyToOne(() => ProductEntity, f => f.orders)
    @JoinColumn({ name: "product_id" })
    product: ProductEntity;

    @ManyToOne(() => UserEntity, f => f.orders)
    @JoinColumn({ name: "user_id" })
    user: UserEntity;



   
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






