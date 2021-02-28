import { CreateAuctionsRepository } from '../../../repositories/implementations/ManageAuctions/'
import { UpdateItemsRepository } from '../../../repositories/implementations/ManageItems'
import ICreateAuctionsDTO from './ICreateAuctionsDTO'

export default class CreateAuctionsUseCase {
  execute (data: ICreateAuctionsDTO) {
    const createAuctionsRepository = new CreateAuctionsRepository()
    const updateItemsRepository = new UpdateItemsRepository()

    createAuctionsRepository.execute(data)

    data.items.forEach(itemID => {
      updateItemsRepository.updateForeignKey(data.id, itemID)
    })
  }
}
