import { AuctionBid } from '../../../entities'
import AuctionBidsRepository from './AuctionBidsRepository'
import IAuctionBidsRepository from './IAuctionBidsRepository'

export default class AuctionBidProxy implements IAuctionBidsRepository {
  constructor (private auctionBidsRepository: AuctionBidsRepository = new AuctionBidsRepository()) {
  }

  create (data: AuctionBid): Promise<AuctionBid> {
    throw new Error('Method not implemented.')
  }

  getHighestBid (auctionItemId: string): Promise<AuctionBid> {
    return this.auctionBidsRepository.getHighestBid(auctionItemId)
  }

  searchBidsInItem (auctionItemId: string): Promise<AuctionBid[]> {
    throw new Error('Method not implemented.')
  }

  searchAll (): Promise<AuctionBid[]> {
    throw new Error('Method not implemented.')
  }

  criptoBids (auctionItemId: string): Promise<AuctionBid[]> {
    throw new Error('Method not implemented.')
  }
}
