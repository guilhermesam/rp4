import { UpdateItemsRepository } from '../../../repositories/implementations/ManageItems'
import IUpdateItemsDTO from './IUpdateItemsDTO'

export default class UpdateItemsUseCase {
  private updateItemsRepository: UpdateItemsRepository

  constructor (updateItemsRepository: UpdateItemsRepository) {
    this.updateItemsRepository = updateItemsRepository
  }

  execute (data: IUpdateItemsDTO) {
    this.updateItemsRepository.execute(data)
  }
}
