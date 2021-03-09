import { getRepository } from 'typeorm'
import { Auction } from '../../../entities'

export default class SearchAuctionRepository {
  async searchById (id: string) {
    const auction = await getRepository(Auction)
      .findOne({ id: id })
    return auction
  }
}
