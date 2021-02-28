import { Router } from 'express'
import {
  createItemsController,
  deleteItemsController,
  searchItemsController
} from './useCases/ManageItems/'
import { updateItemsController } from './useCases/ManageItems/UpdateItems'

import { createAuctionsController } from './useCases/ManageAuctions/'

const router = Router()

// Rotas de "manter item do leilão"
router.get('/', (req, res) => {
  return res.send('Hello World')
})

router.post('/items/create', (req, res) => {
  return createItemsController.handle(req, res)
})

router.delete('/items/delete', (req, res) => {
  return deleteItemsController.handle(req, res)
})

router.get('/items/', (req, res) => {
  return searchItemsController.searchAllHandle(req, res)
})

router.get('/items/searchByTitle', (req, res) => {
  return searchItemsController.searchByTitleHandle(req, res)
})

router.put('/items/update', (req, res) => {
  return updateItemsController.handle(req, res)
})

// Rotas de "manter leilão"
router.post('/auctions/create', (req, res) => {
  return createAuctionsController.handle(req, res)
})

export { router }
