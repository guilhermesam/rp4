import { SearchItemsRepository } from '../../../repositories/implementations/ManageItems'
import ISearchItemsDTO from './ISearchItemsDTO'

export default class SearchItemsUseCase {
    private searchItemsRepository: SearchItemsRepository

    constructor (searchItemsRepository: SearchItemsRepository) {
      this.searchItemsRepository = searchItemsRepository
    }

    async execute (data?: ISearchItemsDTO) {
      if (!data) {
        const items = await this.searchItemsRepository.execute()
        return items
      } else {
        const items = await this.searchItemsRepository.execute(data)
        return items
      }
    }
}
