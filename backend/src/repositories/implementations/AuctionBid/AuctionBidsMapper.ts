import IAuctionBidsDTO from './IAuctionBidsDTO'
import { AuctionBid } from '../../../entities'
import { getRepository } from 'typeorm'

export default class AuctionBidsMapper {
  static toPersistence (auctionBidsDTO: IAuctionBidsDTO): AuctionBid {
    return getRepository(AuctionBid)
      .create({
        id: auctionBidsDTO.id,
        datetime: auctionBidsDTO.datetime,
        value: auctionBidsDTO.value,
        participantId: auctionBidsDTO.participantId,
        auctionItemId: auctionBidsDTO.auctionItemId
      })
  }
}
