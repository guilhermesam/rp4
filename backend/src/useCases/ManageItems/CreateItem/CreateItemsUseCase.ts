// import AuctionItem from '../../../entities/'
import { CreateItemsRepository } from '../../../repositories/implementations/ManageItems/CreateItemsRepository'
import ICreateItemRequestDTO from './CreateItemDTO'

export default class CreateItemUserCase {
  private createItemsRepository: CreateItemsRepository

  constructor (createItemsRepository: CreateItemsRepository) {
    this.createItemsRepository = createItemsRepository
  }

  execute (data: ICreateItemRequestDTO) {
    this.createItemsRepository.execute(data)
  }
}
