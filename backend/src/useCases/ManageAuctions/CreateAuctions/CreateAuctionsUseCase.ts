import { CreateAuctionsRepository } from '../../../repositories/implementations/ManageAuctions/'
import { UpdateItemsRepository } from '../../../repositories/implementations/ManageItems'
import ICreateAuctionsDTO from './ICreateAuctionsDTO'

export default class CreateAuctionsUseCase {
  create (data: ICreateAuctionsDTO) {
    const createAuctionsRepository = new CreateAuctionsRepository()
    const updateItemsRepository = new UpdateItemsRepository()

    createAuctionsRepository.create(data)

    data.items.forEach(async (itemId) => {
      await updateItemsRepository.updateForeignKey(data.id, itemId)
      await updateItemsRepository.setUnavailableStatus(itemId)
    })
  }
}