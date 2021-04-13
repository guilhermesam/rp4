import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn } from 'typeorm'
import { Auctioneer, AuctionItem } from '../entities'

@Entity('Auctions')
export default class Auction {
    @PrimaryColumn()
    id: string

    @Column({ type: 'datetime', default: new Date() })
    start: Date

    @Column({ type: 'datetime', nullable: true })
    end: Date

    @Column({ type: 'tinyint', default: 0 })
    closed: number

    @OneToMany(() => AuctionItem, auctionItem => auctionItem.auction)
    auctionItems: AuctionItem[]

    @ManyToOne(() => Auctioneer, auctioneer => auctioneer.id)
    @JoinColumn({ name: 'auctioneerId' })
    auctioneer: Auctioneer

    @Column()
    auctioneerId: string
}
