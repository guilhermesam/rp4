import { Router } from 'express'
import createAuctioneersController from '../useCases/ManageAuctioneers/CreateAuctioneers/CreateAuctioneersController'
import searchAuctioneersContoller from '../useCases/ManageAuctioneers/SearchAuctioneers/SearchAuctioneersController'

import {
  SearchAuctioneersEmail
} from '../useCases/ManageAuctioneers/SearchAuctioneers/SearchStrategies'

const router = Router()

router.post('/auctioneers/create', (req, res) => {
  return createAuctioneersController.handle(req, res)
})

router.get('/auctionners/search/email/:email', (req, res) => {
  searchAuctioneersContoller.setStrategy(new SearchAuctioneersEmail())
  return searchAuctioneersContoller.handle(req, res)
})

export default router
