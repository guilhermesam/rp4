import { Category } from '../../../entities'
import { IStrategy } from './IStrategy'
import SearchCategoryUseCase from './SearchCategoryUseCase'

class SearchAllCategories implements IStrategy {
  async search (searchCategoryUseCase: SearchCategoryUseCase): Promise<Category[]> {
    return await searchCategoryUseCase.searchAll()
  }
}
export {
  SearchAllCategories
}
