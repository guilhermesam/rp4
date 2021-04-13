// import { ItemProviders } from '../../../entities'
import { IStrategy } from './IStrategy'
import SearchItemProvidersUseCase from './SearchItemProvidersUseCase'

class SearchByName implements IStrategy {
  async search (searchItemProvidersUseCase: typeof SearchItemProvidersUseCase, param: any): Promise<any> {
    return await searchItemProvidersUseCase.searchByName(param.name)
  }
}

export {
  SearchByName
}
