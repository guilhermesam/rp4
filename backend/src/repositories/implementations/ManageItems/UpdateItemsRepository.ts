import { getConnection } from 'typeorm'
import { AuctionItem } from '../../../entities'
import IUpdateItemsDTO from '../../../useCases/ManageItems/UpdateItems/IUpdateItemsDTO'
import ManageItemsRepository from './ManageItemsRepository'

export default class UpdateItemsRepository extends ManageItemsRepository {
  async execute (data: IUpdateItemsDTO) {
    await getConnection()
      .createQueryBuilder()
      .update(AuctionItem)
      .set({
        title: data.title,
        description: data.description,
        minimumBid: data.minimumBid,
        imagePath: data.imagePath,
        finishedOff: data.finishedOff
      })
      .where('AuctionItems.id = :id', { id: data.id })
      .execute()

    console.log(data)
  }
}
