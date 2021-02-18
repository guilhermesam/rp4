// import AuctionItem from '../../../entities/'
import { CreateItemsRepository } from '../../../repositories/implementations/ManageItems/'
import ICreateItemDTO from './ICreateItemsDTO'

export default class CreateItemUserCase {
  private createItemsRepository: CreateItemsRepository

  constructor (createItemsRepository: CreateItemsRepository) {
    this.createItemsRepository = createItemsRepository
  }

  execute (data: ICreateItemDTO) {
    this.createItemsRepository.execute(data)
  }
}
