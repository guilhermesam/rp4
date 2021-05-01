import { IStrategy } from './IStrategy'
import SearchAuctioneersUseCase from './SearchAuctioneersUseCase'

class SearchAllAuctioneers implements IStrategy {
  async search (searchAuctioneersUseCase: typeof SearchAuctioneersUseCase): Promise<any> {
    return await searchAuctioneersUseCase.searchAll()
  }
}

class SearchAuctioneersName implements IStrategy {
  async search (searchAuctioneersUseCase: typeof SearchAuctioneersUseCase, param: any): Promise<any> {
    return await searchAuctioneersUseCase.searchName(param.name)
  }
}

class SearchAuctioneersId implements IStrategy {
  async search (searchAuctioneersUseCase: typeof SearchAuctioneersUseCase, param: any): Promise<any> {
    return await searchAuctioneersUseCase.searchId(param.id)
  }
}

class SearchAuctioneersEmail implements IStrategy {
  async search (searchAuctioneersUseCase: typeof SearchAuctioneersUseCase, param: any): Promise<any> {
    return await searchAuctioneersUseCase.searchEmail(param.email)
  }
}

export {
  SearchAllAuctioneers,
  SearchAuctioneersId,
  SearchAuctioneersName,
  SearchAuctioneersEmail
}
