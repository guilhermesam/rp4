import { Auctioneer } from '../../../entities'
import SearchAuctioneersUseCase from './SearchAuctioneersUseCase'

export interface IStrategy {
    search(searchAuctioneersUseCase: typeof SearchAuctioneersUseCase, param?: any): Promise<Auctioneer[]>
}
