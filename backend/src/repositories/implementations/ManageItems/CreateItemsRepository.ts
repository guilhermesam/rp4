import { AuctionItem } from '../../../entities/'
import { getConnection } from 'typeorm'
import CreateItemDTO from '../../../useCases/ManageItems/CreateItems/ICreateItemsDTO'
import ManageItemsRepository from './ManageItemsRepository'

export default class CreateItemsRepository extends ManageItemsRepository {
  async execute (data: CreateItemDTO) {
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
