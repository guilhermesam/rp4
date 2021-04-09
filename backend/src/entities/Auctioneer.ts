import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm'
import { AuctionSale } from '.'

@Entity('Auctioneers')
export default class Auctioneer {
    @PrimaryColumn({ type: 'varchar' })
    id: string

    @Column({ type: 'varchar' })
    name: string

    @Column({ type: 'varchar' })
    email: string

    @Column({ type: 'varchar' })
    password: string

    @Column({ type: 'varchar' })
    address: string

    @Column({ type: 'varchar' })
    phone: string

    @Column({ type: 'datetime' })
    joinedAt: Date

    @OneToMany(() => AuctionSale, auctionSale => auctionSale.auctioneer)
    auctionSales: AuctionSale[]
}
