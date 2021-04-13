import { Router } from 'express'

import {
  SearchAllItems,
  SearchAvailableItems,
  SearchByIdItems
} from '../useCases/ManageItems/SearchItems/SearchStrategies'

// import { authMiddleware } from '../middlewares/SecurityLayer'

import {
  createItemsController,
  deleteItemsController,
  searchItemsController,
  updateItemsController
} from '../useCases/ManageItems/'
// import adminMiddleware from '../middlewares/SecurityLayer/adminMiddleware'

const router = Router()

router.post('/items/create', (req, res) => {
  return createItemsController.handle(req, res)
})

router.delete('/items/delete', (req, res) => {
  return deleteItemsController.handle(req, res)
})

router.get('/items/search/all', (req, res) => {
  searchItemsController.setStrategy(new SearchAllItems())
  return searchItemsController.handle(req, res)
})

router.get('/items/search/available', (req, res) => {
  searchItemsController.setStrategy(new SearchAvailableItems())
  return searchItemsController.handle(req, res)
})

router.get('/items/search/:id', (req, res) => {
  searchItemsController.setStrategy(new SearchByIdItems())
  return searchItemsController.handle(req, res)
})

router.put('/items/update', (req, res) => {
  return updateItemsController.handle(req, res)
})

export default router
