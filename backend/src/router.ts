import { Router } from 'express'
import {
  createItemsController,
  deleteItemsController,
  searchItemsController,
  updateItemsController
} from './useCases/ManageItems/'
import { finishAuctionsController, createAuctionsController } from './useCases/ManageAuctions/'
import makeBidController from './useCases/MakeAuctionBids/MakeAuctionBidsController'

import { SearchAllItems, SearchAvailableItems } from './useCases/ManageItems/SearchItems/SearchStrategies'

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

router.get('/items/search/all', (req, res) => {
  searchItemsController.setStrategy(new SearchAllItems())
  return searchItemsController.handle(req, res)
})

router.get('/items/search/available', (req, res) => {
  searchItemsController.setStrategy(new SearchAvailableItems())
  return searchItemsController.handle(req, res)
})

router.put('/items/update', (req, res) => {
  return updateItemsController.handle(req, res)
})

// Rotas de "manter leilão"
router.post('/auctions/create', (req, res) => {
  return createAuctionsController.handle(req, res)
})

router.post('/auctions/finish', (req, res) => {
  return finishAuctionsController.handle(req, res)
})

router.post('/bids/create', (req, res) => {
  return makeBidController.handle(req, res)
})

export { router }
