import SearchAuctionsBidsUseCase from './SearchAuctionsBidsUseCase'

export interface IStrategy {
    search(searchAuctionsBidsUseCase: typeof SearchAuctionsBidsUseCase, param?: any): Promise<any>
}
