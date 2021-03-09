import AuctionItemsMapper from '../../../repositories/implementations/AuctionItem/AuctionItemsMapper'
import AuctionItemsRepository from '../../../repositories/implementations/AuctionItem/AuctionItemsRepository'
import IAuctionItemsDTO from '../../../repositories/implementations/AuctionItem/IAuctiontemsDTO'

export default class UpdateItemsUseCase {
  execute (data: IAuctionItemsDTO) {
    const auctionItemsRepository = new AuctionItemsRepository()
    const itemData = AuctionItemsMapper.toPersistence(data)

    auctionItemsRepository.update(itemData)
  }
}
