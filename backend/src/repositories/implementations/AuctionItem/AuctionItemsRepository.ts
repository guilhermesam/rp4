import { getRepository } from 'typeorm'

import { AuctionItem } from '../../../entities'
import IAuctionItemsRepository from './IAuctionItemsRepository'

export default class AuctionItemsRepository implements IAuctionItemsRepository {
  // Create Operations
  async create (data: AuctionItem): Promise<void> {
    const auctionItem = getRepository(AuctionItem).create({
      id: data.id,
      title: data.title,
      description: data.description,
      minimumBid: data.minimumBid,
      imagePath: data.imagePath,
      finishedOff: data.finishedOff
    })

    await getRepository(AuctionItem).save(auctionItem)
  }

  // Search Operations
  async searchAll (): Promise<AuctionItem[]> {
    return await getRepository(AuctionItem).find()
  }

  async searchAvailableItems (): Promise<AuctionItem[]> {
    return await getRepository(AuctionItem).find({ where: { finishedOff: 0 } })
  }

  async searchById (id: string): Promise<AuctionItem> {
    return await getRepository(AuctionItem).findOne({ id: id })
  }

  async searchItemsInAuction (auctionId: string): Promise<AuctionItem[]> {
    return await getRepository(AuctionItem)
      .find({ where: { auctionId: auctionId } })
  }

  // Update Operations
  async update (data: AuctionItem): Promise<void> {
    await getRepository(AuctionItem)
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
  }

  async assignToAuction (auctionId: string, auctionItemId: string) {
    await getRepository(AuctionItem)
      .createQueryBuilder()
      .update(AuctionItem)
      .set({
        auctionId: auctionId
      })
      .where('AuctionItems.id = :id', { id: auctionItemId })
      .execute()
  }

  async setAvailableStatus (auctionItemId: string) {
    await getRepository(AuctionItem)
      .createQueryBuilder()
      .update(AuctionItem)
      .set({
        finishedOff: 0,
        auctionId: null
      })
      .where('AuctionItems.id = :id', { id: auctionItemId })
      .execute()
  }

  async setUnavailableStatus (auctionItemId: string) {
    await getRepository(AuctionItem)
      .createQueryBuilder()
      .update(AuctionItem)
      .set({
        finishedOff: 1
      })
      .where('id = :id', { id: auctionItemId })
      .execute()
  }

  // Delete Operations
  async delete (id: string) {
    await getRepository(AuctionItem).delete({ id: id })
  }
}
