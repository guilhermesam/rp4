import { AuctionItem } from '../../../entities/'
import { getConnection } from 'typeorm'
import ICreateItemsDTO from '../../../useCases/ManageItems/CreateItems/ICreateItemsDTO'

export default class CreateItemsRepository {
  async create (data: ICreateItemsDTO) {
    await getConnection()
      .createQueryBuilder()
      .insert()
      .into(AuctionItem)
      .values([
        {
          id: data.id,
          title: data.title,
          description: data.description,
          minimumBid: data.minimumBid,
          imagePath: data.imagePath,
          finishedOff: data.finishedOff
        }
      ])
      .execute()
  }
}
