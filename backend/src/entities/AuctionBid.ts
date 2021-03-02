import { Entity, Column, ManyToOne, PrimaryColumn } from 'typeorm'

import {
  AuctionItem,
  Participant
} from '../entities'

@Entity('AuctionBids')
export default class AuctionBid {
  @PrimaryColumn()
  id: string

  @Column()
  value: number

  @Column()
  hourBid: number

  @ManyToOne(() => Participant, participant => participant.id)
  participant: Participant

  @ManyToOne(() => AuctionItem, auctionItem => auctionItem.id)
  auctionItem: AuctionItem
}
