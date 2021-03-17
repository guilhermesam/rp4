import AuctionItemsMapper from '../../../repositories/implementations/AuctionItem/AuctionItemsMapper'
import AuctionItemsRepository from '../../../repositories/implementations/AuctionItem/AuctionItemsRepository'
import IAuctionItemsRepository from '../../../repositories/implementations/AuctionItem/IAuctionItemsRepository'
import IAuctionItemDTO from '../../../repositories/implementations/AuctionItem/IAuctiontemsDTO'

class CreateItemUseCase {
  private auctionItemsRepository: IAuctionItemsRepository<any>

  constructor (auctionItemsRepository: IAuctionItemsRepository<any>) {
    this.auctionItemsRepository = auctionItemsRepository
  }

  execute (data: IAuctionItemDTO) {
    const itemData = AuctionItemsMapper.toPersistence(data)
    this.auctionItemsRepository.create(itemData)
  }
}

export default new CreateItemUseCase(
  new AuctionItemsRepository()
)
