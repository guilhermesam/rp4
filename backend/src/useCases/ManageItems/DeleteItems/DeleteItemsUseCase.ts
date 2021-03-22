import AuctionItemsRepository from '../../../repositories/implementations/AuctionItem/AuctionItemsRepository'
import IAuctionItemsRepository from '../../../repositories/implementations/AuctionItem/IAuctionItemsRepository'

class DeleteItemsUseCase {
  private auctionItemsRepository: IAuctionItemsRepository<any>

  constructor (auctionItemsRepository: IAuctionItemsRepository<any>) {
    this.auctionItemsRepository = auctionItemsRepository
  }

  async execute (id: string) {
    await this.auctionItemsRepository.delete(id)
  }
}

export default new DeleteItemsUseCase(
  new AuctionItemsRepository()
)
