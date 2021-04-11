
import { getRepository } from 'typeorm'
import { Category } from '../../../entities'
import IItemCategoryDTO from './IItemCategoryDTO'

export default class ItemCategoryMapper {
  static toPErsistence (itemCategoryDTO: IItemCategoryDTO): Category {
    const repository = getRepository(Category)
    return repository.create({
      id: itemCategoryDTO.id,
      name: itemCategoryDTO.name
    })
  }
}
