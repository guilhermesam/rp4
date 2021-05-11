import { AuctionItem } from '../../../entities'
import IChangeableBaseRepository from '../IChangeableBaseRepository'

export default interface IAuctionItemsRepository<T> extends IChangeableBaseRepository<T> {
    searchAll(): Promise<AuctionItem[]>
    searchAvailableItems(): Promise<AuctionItem[]>
    searchById(id: string): Promise<AuctionItem>
    searchByTitle(title: string): Promise<AuctionItem>
    searchItemsInAuction(auctionId: string): Promise<AuctionItem[]>
    getMinimumBidValue(id: string): Promise<number>
    assignToAuction(auctionId: string, auctionItemId: string): Promise<void>
    setAvailableStatus(id: string): Promise<void>
    setUnavailableStatus(id: string): Promise<void>
    setSoldStatus(id: string): Promise<void>
}
