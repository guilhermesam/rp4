import CreateItemsUserCase from './CreateItemsUseCase'
import CreateItemController from './CreateItemsController'
import { CreateItemsRepository } from '../../../repositories/implementations/ManageItems/'

const createItemsRepository = new CreateItemsRepository()

const createItemsUseCase = new CreateItemsUserCase(createItemsRepository)

const createItemsController = new CreateItemController(createItemsUseCase)

export {
  createItemsUseCase,
  createItemsController
}
