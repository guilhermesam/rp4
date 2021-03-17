import { AuctionItem } from '../../../entities'
import IChangeableBaseRepository from '../IChangeableBaseRepository'

export default interface IAuctionItemsRepository<T> extends IChangeableBaseRepository<T> {

    searchAll(): Promise<AuctionItem[]>
    searchAvailableItems(): Promise<AuctionItem[]>
    searchById(id: string): Promise<AuctionItem>
    searchItemsInAuction(auctionId: string): Promise<AuctionItem[]>

    assignToAuction(auctionId: string, auctionItemId: string): Promise<void>
    setAvailableStatus(id: string): Promise<void>
    setUnavailableStatus(id: string): Promise<void>
}
