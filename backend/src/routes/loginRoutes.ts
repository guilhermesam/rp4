import { Router } from 'express'

import loginController from '../useCases/Login/LoginController'

import loginParticipant from '../useCases/Login/LoginParticipant'
import loginAuctioneer from '../useCases/Login/LoginAuctioneer'

const router = Router()

router.post('/participants/login', (req, res) => {
  loginController.setRole(loginParticipant)
  return loginController.handle(req, res)
})

router.post('/auctioneers/login', (req, res) => {
  loginController.setRole(loginAuctioneer)
  return loginController.handle(req, res)
})

export default router
