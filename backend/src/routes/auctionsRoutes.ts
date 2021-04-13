import { Router } from 'express'
import { authMiddleware, adminMiddleware } from '../middlewares/SecurityLayer'
import { createAuctionsController, finishAuctionsController } from '../useCases/ManageAuctions'

const router = Router()

router.post('/auctions/create', authMiddleware, adminMiddleware, (req, res) => {
  return createAuctionsController.handle(req, res)
})

router.post('/auctions/finish', authMiddleware, (req, res) => {
  return finishAuctionsController.handle(req, res)
})

export default router
