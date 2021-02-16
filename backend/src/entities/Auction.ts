import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm'
import AuctionItem from './AuctionItem'

@Entity('Auctions')
export default class Auction {
    @PrimaryColumn()
    id: string

    @Column({ type: 'datetime' })
    start: string

    @Column({ type: 'datetime' })
    end: string

    @OneToMany(() => AuctionItem, auctionItem => auctionItem.auctionID)
    auctionItems: AuctionItem[]
}
