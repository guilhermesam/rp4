import { AuctionBid } from '../../../entities'
import AuctionBidsRepository from './AuctionBidsRepository'
import IAuctionBidsRepository from './IAuctionBidsRepository'

export default class AuctionBidProxy implements IAuctionBidsRepository<any> {
  constructor (private auctionBidsRepository: AuctionBidsRepository = new AuctionBidsRepository()
  ) {
  }

  public create (data: AuctionBid): Promise<AuctionBid> {
    return this.auctionBidsRepository.create(data)
  }

  getHighestBid (auctionItemId: string): Promise<AuctionBid> {
    return this.auctionBidsRepository.getHighestBid(auctionItemId)
  }

  searchBidsInItem (auctionItemId: string): Promise<AuctionBid[]> {
    return this.searchBidsInItem(auctionItemId)
  }

  searchAll (): Promise<AuctionBid[]> {
    return this.auctionBidsRepository.searchAll()
  }
}
