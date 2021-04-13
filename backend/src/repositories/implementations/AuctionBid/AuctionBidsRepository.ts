import { getRepository } from 'typeorm'
import { AuctionBid } from '../../../entities'
import IAuctionBidsRepository from './IAuctionBidsRepository'

export default class AuctionBidsRepository implements IAuctionBidsRepository<AuctionBid> {
  async create (data: AuctionBid): Promise<void> {
    await getRepository(AuctionBid).save(data)
  }

  async searchAll (): Promise<AuctionBid[]> {
    return await getRepository(AuctionBid).find()
  }

  async getHighestBid (auctionItemId: string): Promise<AuctionBid> {
    return await getRepository(AuctionBid)
      .findOne({ where: { auctionItemId: auctionItemId }, order: { value: 'DESC' } })
  }

  async searchBidsInItem (auctionItemId: string): Promise<AuctionBid[]> {
    return await getRepository(AuctionBid)
      .find({ where: { auctionItemId: auctionItemId } })
  }

  async criptoBids (auctionItemId: String): Promise<AuctionBid> {
    return await getRepository(AuctionBid)
      .findOne({ where: { auctionItemId: auctionItemId }, order: { value: 'DESC' } })
  }
}
