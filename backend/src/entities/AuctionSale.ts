import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryColumn } from 'typeorm'

import {
  Participant,
  AuctionItem
} from '../entities'

@Entity('AuctionSales')
export default class AuctionSales {
    @PrimaryColumn()
    id: string

    @Column({ type: 'datetime', nullable: false })
    date: string

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
}