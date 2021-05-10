import { Category } from '../../../entities'
import ItemCategoryRepository from '../../../repositories/implementations/ItemCategory/ItemCategoryRepository'
import IItemCategoryRepository from '../../../repositories/implementations/ItemCategory/IItemCategoryRepository'

class SearchItemsUseCase {
  private itemCategoryRepository: IItemCategoryRepository<any>

  constructor (itemCategoryRepository?: IItemCategoryRepository<any>) {
    this.itemCategoryRepository = itemCategoryRepository
  }

  async searchAll (): Promise<Category[]> {
    return await this.itemCategoryRepository.searchAll()
  }

  async searchByName (name: string): Promise<Category> {
    return await this.itemCategoryRepository.searchByName(name)
  }

  async searchById (id: string): Promise<Category> {
    return await this.itemCategoryRepository.searchById(id)
  }
}

export default new SearchItemsUseCase(
  new ItemCategoryRepository()
)
