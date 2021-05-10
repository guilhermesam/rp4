import { Auction } from '../../../entities'
import AuctionsRepository from '../../../repositories/implementations/Auction/AuctionsRepository'
import IAuctionsRepository from '../../../repositories/implementations/Auction/IAuctionsRepository'

class SearchAuctionsUseCase {
    private auctionsRepository: IAuctionsRepository<any>

    constructor (auctionsRepository?: IAuctionsRepository<any>) {
      this.auctionsRepository = auctionsRepository
    }

    async searchAll (): Promise<Auction[]> {
      return await this.auctionsRepository.searchAll()
    }

    async searchById (id: string): Promise<Auction> {
      return await this.auctionsRepository.searchById(id)
    }
}

export default new SearchAuctionsUseCase(
  new AuctionsRepository()
)
