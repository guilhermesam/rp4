import { AuctionItem } from '../../../entities'
import { getConnection } from 'typeorm'

export default class ManageItemsRepository {
  async findByID (id: string) {
    const auction = await getConnection()
      .getRepository(AuctionItem)
      .createQueryBuilder('AuctionItems')
      .where('AuctionItems.id = :id', { id: id })
      .getOne()

    return auction
  }
}