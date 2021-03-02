import IDeleteItemsDTO from './IDeleteItemsDTO'
import { DeleteItemsRepository } from '../../../repositories/implementations/ManageItems'

export default class DeleteItemsUseCase {
  async delete (data: IDeleteItemsDTO) {
    const deleteItemsRepository = new DeleteItemsRepository()

    deleteItemsRepository.delete(data)
  }
}
