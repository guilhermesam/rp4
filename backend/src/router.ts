import { Router } from 'express'
import {
  createItemsController,
  deleteItemsController,
  searchItemsController,
  updateItemsController
} from './useCases/ManageItems/'

import { createAuctionsController } from './useCases/ManageAuctions/'

const router = Router()

// Rotas de "manter item do leilão"
router.get('/', (req, res) => {
  return res.send('Hello World')
})

router.post('/items/create', (req, res) => {
  return createItemsController.createHandle(req, res)
})

router.delete('/items/delete', (req, res) => {
  return deleteItemsController.deleteHandle(req, res)
})

router.get('/items/search/all', (req, res) => {
  return searchItemsController.searchAllHandle(req, res)
})

router.get('/items/search/searchByTitle', (req, res) => {
  return searchItemsController.searchByTitleHandle(req, res)
})

router.get('/items/search/available', (req, res) => {
  return searchItemsController.searchAvailableHandle(req, res)
})

router.put('/items/update', (req, res) => {
  return updateItemsController.updateHandle(req, res)
})

// Rotas de "manter leilão"
router.post('/auctions/create', (req, res) => {
  return createAuctionsController.createHandle(req, res)
})

export { router }
