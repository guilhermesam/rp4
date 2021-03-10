import IAuctionBidsDTO from './IAuctionBidsDTO'
import { AuctionBid } from '../../../entities'
import { getRepository } from 'typeorm'

export default class AuctionBidsMapper {
  static toPersistence (auctionBidsDTO: IAuctionBidsDTO): AuctionBid {
    const repository = getRepository(AuctionBid)
    return repository.create({
      id: auctionBidsDTO.id,
      date: auctionBidsDTO.date,
      value: auctionBidsDTO.value,
      participantId: auctionBidsDTO.participantId,
      auctionItemId: auctionBidsDTO.auctionItemId
    })
  }
}
