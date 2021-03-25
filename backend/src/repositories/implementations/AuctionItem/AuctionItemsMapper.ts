import { getRepository } from 'typeorm'
import { AuctionItem } from '../../../entities'
import IAuctionItemsDTO from './IAuctiontemsDTO'

export default class AuctionItemsMapper {
  static toPersistence (auctionItemDTO: IAuctionItemsDTO): AuctionItem {
    const repository = getRepository(AuctionItem)
    return repository.create({
      id: auctionItemDTO.id,
      title: auctionItemDTO.title,
      description: auctionItemDTO.description,
      minimumBid: auctionItemDTO.minimumBid,
      imagePath: auctionItemDTO.imagePath,
      finishedOff: auctionItemDTO.finishedOff
    })
  }
}
 