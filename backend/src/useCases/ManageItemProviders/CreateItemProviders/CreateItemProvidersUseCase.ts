import { IItemProvidersDTO } from '../../../repositories/implementations/ItemProvider/IItemProvidersDTO'
import IItemProvidersRepository from '../../../repositories/implementations/ItemProvider/IItemProvidersRepository'
import ItemProvidersMapper from '../../../repositories/implementations/ItemProvider/ItemProvidersMapper'
import ItemProvidersRepository from '../../../repositories/implementations/ItemProvider/ItemProvidersRepository'

class CreateItemProvidersUseCase {
  private itemProvidersRepository: IItemProvidersRepository<any>

  constructor (itemProvidersRepository: IItemProvidersRepository<any>) {
    this.itemProvidersRepository = itemProvidersRepository
  }

  async execute (data: IItemProvidersDTO) {
    const itemProviderData = ItemProvidersMapper.toPersistence(data)
    return await this.itemProvidersRepository.create(itemProviderData)
  }
}

export default new CreateItemProvidersUseCase(
  new ItemProvidersRepository()
)
