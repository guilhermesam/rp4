import { IStrategy } from './IStrategy'
import SearchAuctionsUseCase from './SearchAuctionsUseCase'

class SearchAllAuctions implements IStrategy {
  async search (searchAuctionsUseCase: typeof SearchAuctionsUseCase): Promise<any> {
    return await searchAuctionsUseCase.searchAll()
  }
}

class SearchByIdAuctions implements IStrategy {
  async search (searchAuctionsUseCase: typeof SearchAuctionsUseCase, param: any): Promise<any> {
    return await searchAuctionsUseCase.searchById(param.id)
  }
}

export {
  SearchAllAuctions,
  SearchByIdAuctions
}
