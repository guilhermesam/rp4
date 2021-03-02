import { getConnection } from 'typeorm'
import { AuctionItem } from '../../../entities'
import IUpdateItemsDTO from '../../../useCases/ManageItems/UpdateItems/IUpdateItemsDTO'

export default class UpdateItemsRepository {
  async updateItem (data: IUpdateItemsDTO) {
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

  async updateForeignKey (auctionId: string, auctionItemId: string) {
    await getConnection()
      .createQueryBuilder()
      .update(AuctionItem)
      .set({
        auctionId: auctionId
      })
      .where('AuctionItems.id = :id', { id: auctionItemId })
      .execute()
  }

  async setAvailableStatus (auctionItemId: string) {
    await getConnection()
      .createQueryBuilder()
      .update(AuctionItem)
      .set({
        finishedOff: 0
      })
      .where('AuctionItems.id = :id', { id: auctionItemId })
      .execute()
  }

  async setUnavailableStatus (auctionItemId: string) {
    await getConnection()
      .createQueryBuilder()
      .update(AuctionItem)
      .set({
        finishedOff: 1
      })
      .where('id = :id', { id: auctionItemId })
      .execute()
  }
}
