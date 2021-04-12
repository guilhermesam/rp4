import SearchItemProvidersUseCase from './SearchItemProvidersUseCase'

export interface IStrategy {
    search(searchItemProvidersUseCase: typeof SearchItemProvidersUseCase, param?: any): Promise<any>
}
