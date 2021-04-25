import { getRepository } from 'typeorm'
import { AuctionSale } from '../../../entities'
import IAuctionSalesDTO from './IAuctionSalesDTO'

export default class AuctionSalesMapper {
  static toPersistence (auctionSaleDTO: IAuctionSalesDTO): AuctionSale {
    const repository = getRepository(AuctionSale)
    return repository.create({
      id: auctionSaleDTO.id,
      date: auctionSaleDTO.date,
      value: auctionSaleDTO.value,
      participantId: auctionSaleDTO.participantId,
      auctionItemId: auctionSaleDTO.auctionItemId,
      auctioneerId: auctionSaleDTO.auctioneerId
    })
  }
}
