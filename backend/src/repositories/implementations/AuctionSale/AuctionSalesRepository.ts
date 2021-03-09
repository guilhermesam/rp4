import { getRepository } from 'typeorm'
import { AuctionSale } from '../../../entities'
import IAuctionSalesRepository from './IAuctionSalesRepository'

export default class AuctionSalesRepository implements IAuctionSalesRepository {
  async create (data: AuctionSale): Promise<void> {
    const auctionSale = getRepository(AuctionSale).create({
      id: data.id,
      date: data.date,
      value: data.value,
      participantId: data.participantId,
      auctionItemId: data.auctionItemId
    })
    await getRepository(AuctionSale).save(auctionSale)
  }

  async searchAll (): Promise<AuctionSale[]> {
    return await getRepository(AuctionSale).find()
  }
}
