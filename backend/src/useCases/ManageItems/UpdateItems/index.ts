import UpdateItemsUseCase from './UpdateItemsUseCase'
import UpdateItemsController from './UpdateItemsController'
import { UpdateItemsRepository } from '../../../repositories/implementations/ManageItems'

const updateItemsRepository = new UpdateItemsRepository()

const updateItemsUseCase = new UpdateItemsUseCase(updateItemsRepository)

const updateItemsController = new UpdateItemsController(updateItemsUseCase)

export {
  updateItemsUseCase,
  updateItemsController
}
