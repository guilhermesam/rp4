import { AuctionItem } from '../../../entities'
import SearchItemsUseCase from './SearchItemsUseCase'

export interface IStrategy {
    search(searchItemsUseCase: SearchItemsUseCase): Promise<AuctionItem[]>
}
