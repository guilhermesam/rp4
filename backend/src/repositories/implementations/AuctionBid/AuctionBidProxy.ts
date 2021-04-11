import AuctionBidsRepository from './AuctionBidsRepository'
import IAuctionBidsRepository from './IAuctionBidsRepository'

export default class AuctionBidProxy<T> implements IAuctionBidsRepository<T> {
    private auctionBidsRepository: AuctionBidsRepository

    constructor () {
      this.auctionBidsRepository = new AuctionBidsRepository()
    }

    getHighestBid (auctionItemId: string): Promise<any> {
      return this.auctionBidsRepository.getHighestBid(auctionItemId)
    }

    searchBidsInItem (auctionItemId: string): Promise<any[]> {
      return this.auctionBidsRepository.searchBidsInItem(auctionItemId)
    }

    create (t: any): Promise<any> {
      return this.create(t)
    }

    searchAll (): Promise<any> {
      return this.searchAll()
    }
}
