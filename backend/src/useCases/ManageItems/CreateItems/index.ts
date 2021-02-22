import CreateItemsUseCase from './CreateItemsUseCase'
import CreateItemsController from './CreateItemsController'
import { CreateItemsRepository } from '../../../repositories/implementations/ManageItems'

const createItemsRepository = new CreateItemsRepository()

const createItemsUseCase = new CreateItemsUseCase(createItemsRepository)

const createItemsController = new CreateItemsController(createItemsUseCase)

export {
  createItemsUseCase,
  createItemsController
}
