import { getConnection } from 'typeorm'

import ManageItemsRepository from './ManageItemsRepository'
import ISearchItemsDTO from '../../../useCases/ManageItems/SearchItems/ISearchItemsDTO'
import { AuctionItem } from '../../../entities/'

export default class SearchItemsRepository extends ManageItemsRepository {
  async execute (data?: ISearchItemsDTO) {
    if (!data.title) {
      return await getConnection()
        .createQueryBuilder()
        .select('AuctionItem')
        .from(AuctionItem, 'AuctionItem')
        .getMany()
    } else {
      return await getConnection()
        .createQueryBuilder()
        .select('AuctionItem')
        .from(AuctionItem, 'AuctionItem')
        .where('AuctionItem.title = :title', { title: data.title })
        .getMany()
    }
  }
}
