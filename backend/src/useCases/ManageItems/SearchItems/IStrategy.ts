import SearchItemsUseCase from './SearchItemsUseCase'

export interface IStrategy {
    search(searchItemsUseCase: typeof SearchItemsUseCase, param?: any): Promise<any>
}
