import { AuctionBid } from '../../../entities'
import IReadonlyBaseRepository from '../IReadonlyBaseRepository'

export default interface IAuctionBidsRepository extends IReadonlyBaseRepository<AuctionBid> {
    getHighestBid(auctionItemId: string): Promise<AuctionBid>
    searchBidsInItem(auctionItemId: string): Promise<AuctionBid[]>
    create(data: AuctionBid): Promise<AuctionBid>
    searchAll(): Promise<AuctionBid[]>
    criptoBids(auctionItemId: string): Promise<AuctionBid[]>
}
