import { Auctioneer } from '../../../entities'
import AuctioneersRepository from '../../../repositories/implementations/Auctioneer/AuctioneersRepository'
import IAuctioneersRepository from '../../../repositories/implementations/Auctioneer/IAuctioneersRepository'

class SearchAuctioneersUseCase {
    private auctioneersRepository : IAuctioneersRepository<any>

    constructor (auctioneersRepository?: IAuctioneersRepository<any>) {
      this.auctioneersRepository = auctioneersRepository
    }

    async searchAll (): Promise<Auctioneer[]> {
      return await this.auctioneersRepository.searchAll()
    }

    async searchId (id:string): Promise<Auctioneer> {
      return await this.auctioneersRepository.searchById(id)
    }

    async searchName (name:string): Promise<Auctioneer> {
      return await this.auctioneersRepository.searchByName(name)
    }

    async searchEmail (email:string): Promise<Auctioneer> {
      return await this.auctioneersRepository.searchByEmail(email)
    }

    async searchAuction (id:string): Promise<Auctioneer> {
      return await this.auctioneersRepository.searchByAuction(id)
    }
}

export default new SearchAuctioneersUseCase(
  new AuctioneersRepository()
)
