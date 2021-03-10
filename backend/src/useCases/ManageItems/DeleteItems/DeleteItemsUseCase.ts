import AuctionItemsRepository from '../../../repositories/implementations/AuctionItem/AuctionItemsRepository'

export default class DeleteItemsUseCase {
  async execute (id: string) {
    const auctionItemsRepository = new AuctionItemsRepository()

    auctionItemsRepository.delete(id)
  }
}
