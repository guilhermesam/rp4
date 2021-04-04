import { Router } from 'express'
import { authMiddleware } from '../middlewares/SecurityLayer'

import makeBidController from '../useCases/ManageAuctionsBids/MakeAuctionBids/MakeAuctionBidsController'
import searchAuctionsBidsController from '../useCases/ManageAuctionsBids/SearchAuctionBids/SearchAuctionsBidsController'
import { SearchHighestBid } from '../useCases/ManageAuctionsBids/SearchAuctionBids/SearchStrategies'
const router = Router()

router.post('/bids/create', authMiddleware, (req, res) => {
  return makeBidController.handle(req, res)
})

router.get('/bids/HighestBid/:id', (req, res) => {
  searchAuctionsBidsController.setStrategy(new SearchHighestBid())
  return searchAuctionsBidsController.handle(req, res)
})

export default router
