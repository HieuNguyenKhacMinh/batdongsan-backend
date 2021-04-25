import { LeadEntity } from 'src/database.module/entities';
import { WishlistEntity } from './wishlist.entity';
import { OrganizationEntity } from './organization.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from "typeorm";
import { OrderEntity } from './order.entity';
import { OpportunityEntity } from './opportunity.entity';
import { NotificationEntity } from './notification.entity';

@Entity()
export class UserEntity {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ name: "full_name", type: "varchar", length: 100 })
    fullName: string;

    @Column({ name: "email", type: "varchar", length: 100 })
    email: string;

    @Column({ name: "password", type: "varchar", length: 255 })
    password: string;

    @Column({ name: "organizition_id", type: "varchar", length: 100 })
    organizationId: string;

    @ManyToOne(() => OrganizationEntity, o => o.users)
    @JoinColumn({ name: "organizition_id" })
    organization: OrganizationEntity;

    @Column({ name: "gender", type: "varchar", length: 25, nullable: true  })
    gender: string;

    @Column({ name: "birthday", type: "date", nullable: true })
    birthday: Date;

    @Column({ name: "phone_number", type: "int", nullable: true  })
    phoneNumber: string;

    @Column({ name: "user_name", type: "varchar", length: 100, nullable: true  })
    userName: string;

    @OneToMany(() => OrderEntity, p => p.user)
    orders: OrderEntity[];

    @OneToMany(() => WishlistEntity, p => p.user)
    wishlists: WishlistEntity[];

    @OneToMany(() => OpportunityEntity, l => l.assignee)
    opportunities: OpportunityEntity[]

    @OneToMany(() => LeadEntity, l => l.user)
    leads: LeadEntity[]

    @OneToMany(() => NotificationEntity, l => l.user)
    notifications: NotificationEntity[]

    // @Column({ name: "company_id", type: "uuid" })
    // companyId: string;

    // @ManyToOne(()=> CompanyEntity, o => o.users)
    // @JoinColumn({name: "company_id"})
    // company: CompanyEntity;


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











