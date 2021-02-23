import IDeleteItemsDTO from './IDeleteItemsDTO'
import { DeleteItemsRepository } from '../../../repositories/implementations/ManageItems'

export default class DeleteItemsUseCase {
  private deleteItemsRepository: DeleteItemsRepository

  constructor (deleteItemsRepository: DeleteItemsRepository) {
    this.deleteItemsRepository = deleteItemsRepository
  }

  async execute (data: IDeleteItemsDTO) {
    const itemExists = await this.deleteItemsRepository.findByID(data.id)

    if (itemExists === undefined) {
      throw new Error('Item not found')
    }

    this.deleteItemsRepository.execute(data)
  }
}
