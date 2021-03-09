import { getRepository } from 'typeorm'
import { Auction } from '../../../entities'
import IAuctionDTO from './IAuctionsDTO'

export default class AuctionsMapper {
  static toPersistence (auctionDTO: IAuctionDTO): Auction {
    const repository = getRepository(Auction)
    return repository.create({
      id: auctionDTO.id,
      start: auctionDTO.start,
      closed: auctionDTO.closed,
      end: auctionDTO.end
    })
  }
}
