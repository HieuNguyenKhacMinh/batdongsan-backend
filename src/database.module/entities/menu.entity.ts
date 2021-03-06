import { Entity, PrimaryGeneratedColumn, Column, TreeParent, JoinColumn, TreeChildren } from "typeorm";

@Entity()
export class MenuEntity {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ name: "name", type: "varchar", length: 50 })
    name: string;


    
    @Column({ name: "parent_id", type: "uuid", nullable: true })
    parentId: string;
    /**
     * Update Date
     */
    @TreeChildren()
    children: MenuEntity[];

    @TreeParent()
    @JoinColumn({ name: "parent_id" })
    parent: MenuEntity;


    /**
     * Description
     */
    @Column({ name: 'description', type: 'longtext', nullable: true })
    public description: string;

    @Column({ name: 'path', type: 'varchar', length: 64, })
    public path: string;

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

    @Column({ name: 'last_update_date', type: 'timestamp', nullable: true, default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
    public lastUpdateDate: string;
}
