import { getRepository } from 'typeorm'
import { Auction } from '../../../entities'
import IAuctionsRepository from './IAuctionsRepository'

export default class AuctionsRepository implements IAuctionsRepository<Auction> {
  async setAuctionEndDate (id: string, endDate: Date): Promise<void> {
    await getRepository(Auction)
      .createQueryBuilder()
      .update(Auction)
      .set({
        end: endDate
      })
      .where('id = :id', { id: id })
      .execute()
  }

  async create (data: Auction): Promise<Auction> {
    return getRepository(Auction).save(data)
  }

  async close (id: string): Promise<void> {
    await getRepository(Auction)
      .createQueryBuilder()
      .update(Auction)
      .set({
        closed: 1
      })
      .where('id = :id', { id: id })
      .execute()
  }

  async searchById (id: string): Promise<Auction> {
    return await getRepository(Auction).findOne({ id: id })
  }

  async searchAll (): Promise<Auction[]> {
    return await getRepository(Auction).find()
  }
}
