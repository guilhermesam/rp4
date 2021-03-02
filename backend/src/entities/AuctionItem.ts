import { Column, Entity, ManyToOne, OneToMany, PrimaryColumn } from 'typeorm'

import {
  Auction,
  AuctionBid,
  Category
} from '../entities'

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

    @OneToMany(() => AuctionBid, auctionBid => auctionBid.auctionItem)
    auctionBids: AuctionBid[]

    @ManyToOne(() => Auction, auction => auction.id)
    auction: Auction

    @ManyToOne(() => Category, category => category.id)
    category: Category
}
