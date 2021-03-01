import { Auction } from '../../../entities'
import { getConnection } from 'typeorm'

export default class ManageAuctionRepository {
  async findByID (id: string) {
    const auction = await getConnection()
      .getRepository(Auction)
      .createQueryBuilder('Auctions')
      .where('AuctionItems.id = :id', { id: id })
      .getOne()
    return auction
  }
}
