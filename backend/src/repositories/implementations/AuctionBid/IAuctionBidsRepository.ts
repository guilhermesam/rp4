import { AuctionBid } from '../../../entities'
import IReadonlyBaseRepository from '../IReadonlyBaseRepository'

export default interface IAuctionBidsRepository extends IReadonlyBaseRepository<AuctionBid> {
    getHighestBid(auctionItemId: string): Promise<AuctionBid>
}
