import { SearchAuctionRepository } from '../../../repositories/implementations/ManageAuctions'
import ISearchAuctionDTO from './ISearchAuctionDTO'

export default class SearchItemsUseCase {
    private searchAuctionRepository: SearchAuctionRepository

    constructor (searchAuctionRepository: SearchAuctionRepository) {
      this.searchAuctionRepository = searchAuctionRepository
    }

    async execute (data?: ISearchAuctionDTO) {
      if (!data) {
        const items = await this.searchAuctionRepository.execute()
        return items
      } else {
        const items = await this.searchAuctionRepository.execute(data)
        return items
      }
    }
}
