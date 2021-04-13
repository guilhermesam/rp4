import { AuctionSale } from '../../../entities'
import IReadonlyBaseRepository from '../IReadonlyBaseRepository'

export default interface IAuctionSalesRepository<T> extends IReadonlyBaseRepository<T> {
    getSaleByAuctionItemId (auctionItemId: string): Promise<AuctionSale>
}
