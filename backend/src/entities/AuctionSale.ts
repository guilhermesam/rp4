import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryColumn } from 'typeorm'

import {
  Participant,
  AuctionItem,
  Auctioneer
} from '../entities'

@Entity('AuctionSales')
export default class AuctionSales {
    @PrimaryColumn()
    id: string

    @Column({ type: 'datetime', nullable: false })
    date: Date

    @Column({ type: 'double', nullable: false })
    value: number

    @ManyToOne(() => Participant, participant => participant.id)
    @JoinColumn({ name: 'participantId' })
    participant: Participant

    @Column({ nullable: false })
    participantId: string

    @OneToOne(() => AuctionItem, auction => auction.id)
    @JoinColumn({ name: 'auctionItemId' })
    auctionItem: AuctionItem

    @Column({ nullable: false })
    auctionItemId: string

    @ManyToOne(() => Auctioneer, auctioneer => auctioneer.id)
    @JoinColumn({ name: 'auctioneerId' })
    auctioneer: Auctioneer

    @Column({ nullable: false })
    auctioneerId: string
}
