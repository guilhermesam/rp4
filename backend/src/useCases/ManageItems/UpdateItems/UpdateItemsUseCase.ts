import AuctionItemsMapper from '../../../repositories/implementations/AuctionItem/AuctionItemsMapper'
import AuctionItemsRepository from '../../../repositories/implementations/AuctionItem/AuctionItemsRepository'
import IAuctionItemsRepository from '../../../repositories/implementations/AuctionItem/IAuctionItemsRepository'
import IAuctionItemsDTO from '../../../repositories/implementations/AuctionItem/IAuctiontemsDTO'

class UpdateItemsUseCase {
  private auctionItemsRepository: IAuctionItemsRepository<any>

  constructor (auctionItemsRepository: IAuctionItemsRepository<any>) {
    this.auctionItemsRepository = auctionItemsRepository
  }

  async execute (data: IAuctionItemsDTO) {
    const itemData = AuctionItemsMapper.toPersistence(data)

    await this.auctionItemsRepository.update(itemData)
  }
}

export default new UpdateItemsUseCase(
  new AuctionItemsRepository()
)
