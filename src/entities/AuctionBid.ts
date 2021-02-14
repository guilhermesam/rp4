import { Entity, Column, ManyToOne, PrimaryColumn } from 'typeorm'
import AuctionItem from './AuctionItem'

import Participant from './Participant'

@Entity('AuctionBids')
export default class AuctionBid {
  @PrimaryColumn()
  id: string

  @Column()
  value: number

  @Column()
  hourBid: number

  @ManyToOne(() => Participant, participant => participant.id)
  participantID: Participant

  @ManyToOne(() => AuctionItem, auctionItem => auctionItem.id)
  auctionItemID: AuctionItem
}
