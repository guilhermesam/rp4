import { CreateItemsRepository } from '../../../repositories/implementations/ManageItems/'
import ICreateItemsDTO from './ICreateItemsDTO'

export default class CreateItemUseCase {
  create (data: ICreateItemsDTO) {
    const createItemsRepository = new CreateItemsRepository()
    createItemsRepository.create(data)
  }
}
