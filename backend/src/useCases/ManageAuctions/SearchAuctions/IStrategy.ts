import SearchAuctionsUseCase from './SearchAuctionsUseCase'

export interface IStrategy {
    search(searchAuctionsUseCase: typeof SearchAuctionsUseCase, param?: any): Promise<any>
}
