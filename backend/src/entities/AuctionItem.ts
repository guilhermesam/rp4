import { Column, Entity, ManyToOne, OneToMany, PrimaryColumn } from 'typeorm'

import Auction from './Auction'
import AuctionBid from './AuctionBid'

@Entity('AuctionItems')
export default class AuctionItem {
    @PrimaryColumn()
    id: string

    @Column({ length: 32 })
    title: string

    @Column({ length: 128 })
    description: string

    @Column({ type: 'double' })
    minimumBid: number

    @Column({ length: 255 })
    imagePath: string

    @Column({ type: 'tinyint' })
    finishedOff: number

    @OneToMany(() => AuctionBid, auctionBid => auctionBid.id)
    auctionBids: AuctionBid[]

    @ManyToOne(() => Auction, auction => auction.id)
    auctionID: string
}
