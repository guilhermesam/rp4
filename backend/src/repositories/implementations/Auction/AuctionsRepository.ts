import { getRepository } from 'typeorm'
import { Auction } from '../../../entities'
import IAuctionsRepository from './IAuctionsRepository'

export default class AuctionsRepository implements IAuctionsRepository {
  async create (data: Auction): Promise<void> {
    const auction = getRepository(Auction).create({
      id: data.id,
      start: data.start
    })

    await getRepository(Auction).save(auction)
  }

  async close (id: string) {
    await getRepository(Auction)
      .createQueryBuilder()
      .update(Auction)
      .set({
        closed: 1
      })
      .where('Auction.id = :id', { id: id })
      .execute()
  }

  async searchById (id: string) {
    return await getRepository(Auction).findOne({ id: id })
  }

  async searchAll () {
    return await getRepository(Auction).find()
  }
}
