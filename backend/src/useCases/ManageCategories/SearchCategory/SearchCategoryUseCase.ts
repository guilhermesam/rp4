import { Category } from '../../../entities'
import ItemCategoryRepository from '../../../repositories/implementations/ItemCategory/ItemCategoryRepository'

export default class SearchItemsUseCase {
  searchAll (): Promise<Category[]> {
    const ItemCategory = new ItemCategoryRepository()
    return ItemCategory.searchAll()
  }

  searchByName (name: string): Promise<Category> {
    const ItemCategory = new ItemCategoryRepository()
    return ItemCategory.searchByName(name)
  }
}
