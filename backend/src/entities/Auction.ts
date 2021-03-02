import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm'
import { AuctionItem } from '../entities'

@Entity('Auctions')
export default class Auction {
    @PrimaryColumn()
    id: string

    @Column({ type: 'datetime' })
    start: string

    @Column({ type: 'datetime', nullable: true })
    end: string

    @OneToMany(() => AuctionItem, auctionItem => auctionItem.auction)
    auctionItems: AuctionItem[]
}
