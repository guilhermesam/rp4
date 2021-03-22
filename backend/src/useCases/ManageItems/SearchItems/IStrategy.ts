import { AuctionItem } from '../../../entities'
import SearchItemsUseCase from './SearchItemsUseCase'

export interface IStrategy {
    search(searchItemsUseCase: typeof SearchItemsUseCase): Promise<AuctionItem[]>
}
