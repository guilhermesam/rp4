import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm'
import { AuctionBid, AuctionSale } from '../entities'

@Entity('Participants')
export default class Participant {
    @PrimaryColumn()
    id: string

    @Column()
    name: string

    @Column()
    userName: string

    @Column()
    password: string

    @Column()
    email: string

    @Column()
    address: string

    @Column()
    phone: string

    @OneToMany(() => AuctionBid, auctionBid => auctionBid.participant)
    auctionBids: AuctionBid[]

    @OneToMany(() => AuctionSale, auctionSale => auctionSale.participant)
    auctionSales: AuctionSale[]
}
