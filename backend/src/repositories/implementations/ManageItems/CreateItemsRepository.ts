import { AuctionItem } from '../../../entities/'
import { getConnection } from 'typeorm'
import CreateItemDTO from '../../../useCases/ManageItems/CreateItem/CreateItemDTO'

export class CreateItemsRepository {
  async execute (data: CreateItemDTO) {
    await getConnection()
      .createQueryBuilder()
      .insert()
      .into(AuctionItem)
      .values([
        {
          id: 'abc',
          title: data.title,
          description: data.description,
          minimumBid: data.minimumBid,
          imagePath: data.imagePath,
          finishedOff: data.finishedOff
        }
      ])
      .execute()
  }

  async findByID (id: string) {
    const item = await getConnection()
      .getRepository(AuctionItem)
      .createQueryBuilder('auction_item')
      .where('auction_item.id = :id', { id: id })
      .getOne()
    return item
  }
}
