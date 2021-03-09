import { getRepository } from 'typeorm'

import { AuctionItem } from '../../../entities/'

export default class SearchItemsRepository {
  async searchAll (): Promise<AuctionItem[]> {
    const items = await getRepository(AuctionItem).find()
    return items
  }

  async searchByTitle (title: string): Promise<AuctionItem> {
    const item = await getRepository(AuctionItem)
      .findOne({ title: title })
    return item
  }

  async searchAuctionItems (): Promise<any[]> {
    const auctionsItems = await getRepository(AuctionItem).createQueryBuilder('ct')
      .innerJoinAndSelect('ct.category', 'name')
      .getMany()
    return auctionsItems
  }

  async searchAvailableItems (): Promise<AuctionItem[]> {
    return await getRepository(AuctionItem)
      .createQueryBuilder('auctionItem')
      .where('auctionItem.finishedOff = 0')
      .getMany()
  }

  async searchById (id: string) {
    const item = await getRepository(AuctionItem)
      .findOne({ id: id })
    return item
  }
}
