import SearchCategoryUseCase from './SearchCategoryUseCase'

export interface IStrategy {
    search(searchItemsUseCase: typeof SearchCategoryUseCase, param?: any): Promise<any>

}
