import { getRepository } from 'typeorm'
import { AuctionSale } from '../../../entities'
import IAuctionSalesRepository from './IAuctionSalesRepository'

export default class AuctionSalesRepository implements IAuctionSalesRepository<AuctionSale> {
  async create (data: AuctionSale): Promise<void> {
    await getRepository(AuctionSale).save(data)
  }

  async searchAll (): Promise<AuctionSale[]> {
    return await getRepository(AuctionSale).find()
  }
}
