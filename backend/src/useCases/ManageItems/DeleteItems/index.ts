import DeleteItemsUseCase from './DeleteItemsUseCase'
import DeleteItemsController from './DeleteItemsController'
import { DeleteItemsRepository } from '../../../repositories/implementations/ManageItems'

const deleteRepository = new DeleteItemsRepository()

const deleteItemsUseCase = new DeleteItemsUseCase(deleteRepository)

const deleteItemsController = new DeleteItemsController(deleteItemsUseCase)

export {
  deleteItemsUseCase,
  deleteItemsController
}
