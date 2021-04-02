import { Router } from 'express'
import {
  createItemsController,
  deleteItemsController,
  searchItemsController,
  updateItemsController
} from './useCases/ManageItems/'

import {
  finishAuctionsController,
  createAuctionsController
} from './useCases/ManageAuctions/'

import makeBidController from './useCases/MakeAuctionBids/MakeAuctionBidsController'

import {
  SearchAllItems,
  SearchAvailableItems,
  SearchByIdItems
} from './useCases/ManageItems/SearchItems/SearchStrategies'

import { SearchAllCategories } from './useCases/ManageCategories/SearchCategory/SearchStrategies'
import SearchCategoryController from './useCases/ManageCategories/SearchCategory/SearchCategoryController'

import CreateParticipantsController from './useCases/ManageParticipants/CreateParticipants/CreateParticipantsController'
import SearchParticipantsController from './useCases/ManageParticipants/SearchParticipants/SearchParticipantsController'

import {
  SearchAllParticipants,
  SearchParticipantsId
} from './useCases/ManageParticipants/SearchParticipants/SearchStrategies'

import loginController from './useCases/Login/LoginController'
import { authMiddleware } from './middlewares/SecurityLayer'
import CreateItemProvidersController from './useCases/ManageItemProviders/CreateItemProviders/CreateItemProvidersController'

const router = Router()

// Rotas de "manter item do leilão"
router.post('/login', (req, res) => {
  return loginController.handle(req, res)
})

router.post('/items/create', (req, res) => {
  return createItemsController.handle(req, res)
})

router.delete('/items/delete', authMiddleware, (req, res) => {
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

router.put('/items/update', authMiddleware, (req, res) => {
  return updateItemsController.handle(req, res)
})

// Rotas de "manter leilão"
router.post('/auctions/create', authMiddleware, (req, res) => {
  return createAuctionsController.handle(req, res)
})

router.post('/auctions/finish', authMiddleware, (req, res) => {
  return finishAuctionsController.handle(req, res)
})

router.post('/bids/create', authMiddleware, (req, res) => {
  return makeBidController.handle(req, res)
})

// Rotas de "manter categorias de itens"
router.get('/items/search/allCategories', (req, res) => {
  SearchCategoryController.setStrategy(new SearchAllCategories())
  return SearchCategoryController.handle(req, res)
})

// Rotas de participantes
router.post('/participants/create', (req, res) => {
  return CreateParticipantsController.handle(req, res)
})

router.get('/participants/search/all', (req, res) => {
  SearchParticipantsController.setStrategy(new SearchAllParticipants())
  return SearchParticipantsController.handle(req, res)
})

router.get('/participants/search/:id', (req, res) => {
  SearchParticipantsController.setStrategy(new SearchParticipantsId())
  return SearchParticipantsController.handle(req, res)
})

router.post('/itemProviders/create', (req, res) => {
  return CreateItemProvidersController.handle(req, res)
})

export default router
