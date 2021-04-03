import { Column, Entity, PrimaryColumn } from 'typeorm'

@Entity('Auctioneers')
export default class Auctioneer {
    @PrimaryColumn({ type: 'varchar' })
    id: string

    @Column({ type: 'varchar' })
    name: string

    @Column({ type: 'varchar' })
    email: string

    @Column({ type: 'varchar' })
    address: string

    @Column({ type: 'varchar' })
    phone: string

    @Column({ type: 'datetime' })
    joinedAt: Date
}
