import { getRepository } from 'typeorm'
import { AuctionSale } from '../../../entities'
import IAuctionSalesRepository from './IAuctionSalesRepository'

export default class AuctionSalesRepository implements IAuctionSalesRepository<AuctionSale> {
  async create (data: AuctionSale): Promise<AuctionSale> {
    return getRepository(AuctionSale).save(data)
  }

  async searchAll (): Promise<AuctionSale[]> {
    return getRepository(AuctionSale).find()
  }

  public async getSaleByAuctionItemId (auctionItemId: string): Promise<AuctionSale> {
    return getRepository(AuctionSale).findOne({ where: { auctionItemId } })
  }
}
