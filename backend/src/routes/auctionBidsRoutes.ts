import { Router } from 'express'
import { authMiddleware } from '../middlewares/SecurityLayer'

import makeBidController from '../useCases/MakeAuctionBids/MakeAuctionBidsController'

const router = Router()

router.post('/bids/create', authMiddleware, (req, res) => {
  return makeBidController.handle(req, res)
})

export default router
