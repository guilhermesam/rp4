import { UpdateItemsRepository } from '../../../repositories/implementations/ManageItems'
import IUpdateItemsDTO from './IUpdateItemsDTO'

export default class UpdateItemsUseCase {
  update (data: IUpdateItemsDTO) {
    const updateItemsRepository = new UpdateItemsRepository()

    updateItemsRepository.updateItem(data)
  }
}
