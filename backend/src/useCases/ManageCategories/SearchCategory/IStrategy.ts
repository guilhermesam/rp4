import { Category } from '../../../entities'
import SearchCategoryUseCase from './SearchCategoryUseCase'

export interface IStrategy {
    search(searchItemsUseCase: SearchCategoryUseCase): Promise<Category[]>

}
