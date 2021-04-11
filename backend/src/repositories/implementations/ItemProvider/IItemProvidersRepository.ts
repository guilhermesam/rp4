import { ItemProvider } from '../../../entities'
import IChangeableRepository from '../IChangeableBaseRepository'

export default interface IItemProvidersRepository<T> extends IChangeableRepository<T> {
  searchAll(): Promise <ItemProvider[]>
  searchById(id: string): Promise<ItemProvider>
  searchByName(name: string): Promise<ItemProvider>
  searchByEmail (email: string): Promise<ItemProvider>
}
