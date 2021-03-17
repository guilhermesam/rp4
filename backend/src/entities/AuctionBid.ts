import { Entity, Column, ManyToOne, PrimaryColumn, JoinColumn } from 'typeorm'

import {
  AuctionItem,
  Participant
} from '../entities'

@Entity('AuctionBids')
export default class AuctionBid {
  @PrimaryColumn()
  id: string

  @Column({ type: 'datetime', name: 'datetime' })
  datetime: Date

  @Column({ type: 'double' })
  value: number

  @ManyToOne(() => Participant, participant => participant.id)
  @JoinColumn({ name: 'participantId' })
  participant: Participant

  @Column({ nullable: false })
  participantId: string

  @ManyToOne(() => AuctionItem, auctionItem => auctionItem.id)
  @JoinColumn({ name: 'auctionItemId' })
  auctionItem: AuctionItem

  @Column({ nullable: false })
  auctionItemId: string
}
