import { getRepository } from 'typeorm'

import { Category } from '../../../entities'
import IItemCategoryRepository from './IItemCategoryRepository'

export default class ItemCategorysRepository implements IItemCategoryRepository<Category> {
  async searchById (id: string): Promise<Category> {
    return await getRepository(Category).findOne({ id: id })
  }

  // Create Operation
  async create (data: Category): Promise<void> {
    await getRepository(Category).save(data)
  }

  // Search Operations
  async searchAll (): Promise<Category[]> {
    return await getRepository(Category).find()
  }

  async searchByName (name: string): Promise<Category> {
    return await getRepository(Category).findOne({ name: name })
  }

  // Delete Operation
  async delete (id: string) {
    await getRepository(Category).delete({ id: id })
  }

  // Update Operations
  async update (data: Category): Promise<any> {
    getRepository(Category)
      .createQueryBuilder()
      .update(Category)
      .set({
        name: data.name
      })
      .where('Category.id = :id', { id: data.id })
  }
}
