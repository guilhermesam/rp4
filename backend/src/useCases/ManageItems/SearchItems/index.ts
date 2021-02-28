import SearchItemsUseCase from './SearchItemsUseCase'
import SearchItemsController from './SearchItemsController'
import { SearchItemsRepository } from '../../../repositories/implementations/ManageItems'

const searchRepository = new SearchItemsRepository()

const searchItemsUseCase = new SearchItemsUseCase(searchRepository)

const searchItemsController = new SearchItemsController(searchItemsUseCase)

export {
  searchItemsUseCase,
  searchItemsController
}
