import { ItemProvider } from '../../../entities'
import ItemProvidersRepository from '../../../repositories/implementations/ItemProvider/ItemProvidersRepository'
import IItemProvidersRepository from '../../../repositories/implementations/ItemProvider/IItemProvidersRepository'

class SearchItemProvidersUseCase {
  private itemProvidersRepository : IItemProvidersRepository<any>

  constructor (itemProvidersRespository?: IItemProvidersRepository<any>) {
    this.itemProvidersRepository = itemProvidersRespository
  }

  async searchByName (name: string): Promise<ItemProvider> {
    return await this.itemProvidersRepository.searchByName(name)
  }
}

export default new SearchItemProvidersUseCase(
  new ItemProvidersRepository()
)
