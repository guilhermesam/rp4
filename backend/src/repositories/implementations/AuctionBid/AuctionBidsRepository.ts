import { getRepository, Repository } from 'typeorm'

import { AuctionBid } from '../../../entities'
import IAuctionBidsRepository from './IAuctionBidsRepository'

export default class AuctionBidsRepository implements IAuctionBidsRepository {
  private repository: Repository<AuctionBid>

  private getRepositoryInstance (): Repository<AuctionBid> {
    if (!this.repository) {
      this.repository = getRepository(AuctionBid)
      return this.repository
    }

    return this.repository
  }

  async create (data: AuctionBid): Promise<AuctionBid> {
    const actionBid = await this.getRepositoryInstance().save(data)
    return actionBid
  }

  searchAll (): Promise<AuctionBid[]> {
    return this.getRepositoryInstance().find()
  }

  getHighestBid (auctionItemId: string): Promise<AuctionBid> {
    return this.getRepositoryInstance()
      .findOne({ where: { auctionItemId }, order: { value: 'DESC' } })
  }

  searchBidsInItem (auctionItemId: string): Promise<AuctionBid[]> {
    return this.getRepositoryInstance()
      .find({ where: { auctionItemId } })
  }

  criptoBids (auctionItemId: string): Promise<AuctionBid[]> {
    return this.getRepositoryInstance()
      .find({ where: { auctionItemId }, order: { value: 'DESC' } })
  }
}
