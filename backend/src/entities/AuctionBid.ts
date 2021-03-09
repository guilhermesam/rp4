import { Entity, Column, ManyToOne, PrimaryColumn, JoinColumn } from 'typeorm'

import {
  AuctionItem,
  Participant
} from '../entities'

@Entity('AuctionBids')
export default class AuctionBid {
  @PrimaryColumn()
  id: string

  @Column({ type: 'double' })
  value: number

  @Column({ type: 'datetime' })
  date: string

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
