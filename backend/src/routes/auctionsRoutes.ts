import { Router } from 'express'
import { authMiddleware, adminMiddleware } from '../middlewares/SecurityLayer'
import { createAuctionsController, finishAuctionsController, searchAuctionsController } from '../useCases/ManageAuctions'
import {
  SearchAllAuctions,
  SearchByIdAuctions
} from '../useCases/ManageAuctions/SearchAuctions/SearchStrategies'

const router = Router()

router.post('/auctions/create', authMiddleware, adminMiddleware, (req, res) => {
  return createAuctionsController.handle(req, res)
})

router.post('/auctions/finish', authMiddleware, (req, res) => {
  return finishAuctionsController.handle(req, res)
})

router.get('/auctions/search/all', (req, res) => {
  searchAuctionsController.setStrategy(new SearchAllAuctions())
  return searchAuctionsController.handle(req, res)
})

router.get('/Auctions/search/:id', (req, res) => {
  searchAuctionsController.setStrategy(new SearchByIdAuctions())
  return searchAuctionsController.handle(req, res)
})

export default router
