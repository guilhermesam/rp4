import AuctionItemsRepository from './AuctionItemsRepository'
import IAuctionItemsRepository from './IAuctionItemsRepository'
import { AuctionItem } from '../../../entities'

export default class AuctionItemProxy implements IAuctionItemsRepository<AuctionItem> {
    private auctionItemsRepository: AuctionItemsRepository

    constructor () {
      this.auctionItemsRepository = new AuctionItemsRepository()
    }

    searchAll (): Promise<AuctionItem[]> {
      return this.auctionItemsRepository.searchAll()
    }

    searchAvailableItems (): Promise<AuctionItem[]> {
      if (this.checkAccess()) {
        return this.auctionItemsRepository.searchAvailableItems()
      }
    }

    searchById (id: string): Promise<AuctionItem> {
      if (this.checkAccess()) {
        console.log(id)
        return this.auctionItemsRepository.searchById(id)
      }
    }

    searchItemsInAuction (auctionId: string): Promise<AuctionItem[]> {
      return this.searchItemsInAuction(auctionId)
    }

    getMinimumBidValue (id: string): Promise<number> {
      return this.getMinimumBidValue(id)
    }

    assignToAuction (auctionId: string, auctionItemId: string): Promise<void> {
      return this.assignToAuction(auctionId, auctionItemId)
    }

    setAvailableStatus (id: string): Promise<void> {
      return this.setAvailableStatus(id)
    }

    setUnavailableStatus (id: string): Promise<void> {
      return this.setUnavailableStatus(id)
    }

    setSoldStatus (id: string): Promise<void> {
      return this.setSoldStatus(id)
    }

    create (t: AuctionItem): Promise<any> {
      return this.create(t)
    }

    delete (id: string): Promise<any> {
      return this.delete(id)
    }

    update (t: AuctionItem): Promise<any> {
      return this.update(t)
    }

    // APLICAÇÃO DOS MÉTODOS DO PROXY
    checkAccess (): boolean {
      console.log('Proxy: acesso ao leilão')
      return true
    }
}
