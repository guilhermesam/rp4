import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm'
import AuctionBid from './AuctionBid'

@Entity('Participants')
export default class Participant {
    @PrimaryColumn()
    id: string

    @Column()
    name: string

    @Column()
    username: string

    @Column()
    password: string

    @Column()
    email: string

    @Column()
    address: string

    @Column()
    phone: string

    @OneToMany(() => AuctionBid, auctionBid => auctionBid.participantID)
    auctionBids: AuctionBid[]
}