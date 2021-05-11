import { Category } from '../../../entities'
import { IStrategy } from './IStrategy'
import SearchCategoryUseCase from './SearchCategoryUseCase'

class SearchAllCategories implements IStrategy {
  async search (searchCategoryUseCase: typeof SearchCategoryUseCase): Promise<any> {
    return await searchCategoryUseCase.searchAll()
  }
}

class SearchById implements IStrategy {
  async search (searchCategoryUseCase: typeof SearchCategoryUseCase, param: any): Promise<Category> {
    return await searchCategoryUseCase.searchById(param.id)
  }
}

class SearchByName implements IStrategy {
  async search (searchCategoryUseCase: typeof SearchCategoryUseCase, param: any): Promise<Category> {
    return await searchCategoryUseCase.searchById(param.name)
  }
}
export {
  SearchAllCategories,
  SearchById,
  SearchByName
}
