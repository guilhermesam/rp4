import { Category } from '../../../entities'
import IChangeableBaseRepository from '../IChangeableBaseRepository'

export default interface IItemCategoryRepository<T> extends IChangeableBaseRepository<T> {

    searchAll(): Promise<Category[]>
    searchByName(name: string): Promise<Category>
    searchById(id: string): Promise<Category>
}
