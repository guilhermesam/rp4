import IReadonlyBaseRepository from '../IReadonlyBaseRepository'

export default interface IAuctionBidsRepository<T> extends IReadonlyBaseRepository<T> {
    getHighestBid(auctionItemId: string): Promise<T>
    searchBidsInItem(auctionItemId: string): Promise<T[]>
}
