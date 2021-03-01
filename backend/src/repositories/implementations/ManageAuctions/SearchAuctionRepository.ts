import { getConnection } from 'typeorm'

import ISearchAuctionDTO from '../../../useCases/ManageAuctions/SearchAuction/ISearchAuctionDTO'
import { Auction } from '../../../entities'

export default class SearchAuctionRepository {
  async execute (data?: ISearchAuctionDTO) {
    if (!data.id) {
      return await getConnection()
        .createQueryBuilder()
        .select('Auction')
        .from(Auction, 'Auction')
        .getMany()
    } else {
      return await getConnection()
        .createQueryBuilder()
        .select('Auction')
        .from(Auction, 'Auction')
        .where('Auction.id = :id', { id: data.id })
        .getMany()
    }
  }
}
