import { getRepository } from 'typeorm'
import { ItemProvider } from '../../../entities'
import IItemProvidersRepository from './IItemProvidersRepository'

export default class ItemProvidersRepository implements IItemProvidersRepository<ItemProvider> {
  async searchAll (): Promise<ItemProvider[]> {
    return await getRepository(ItemProvider).find()
  }

  async searchById (id: string): Promise<ItemProvider> {
    return await getRepository(ItemProvider).findOne({ where: { id } })
  }

  async searchByName (name: string): Promise<ItemProvider> {
    return await getRepository(ItemProvider).findOne({ where: { name: name } })
  }

  async searchByEmail (email: string): Promise<ItemProvider> {
    return await getRepository(ItemProvider).findOne({ where: { email } })
  }

  async create (data: ItemProvider): Promise<any> {
    await getRepository(ItemProvider).save(data)
  }

  async delete (id: string): Promise<void> {
    await getRepository(ItemProvider).delete(id)
  }

  async update (data: ItemProvider): Promise<any> {
    await getRepository(ItemProvider).save(data)
  }
}
