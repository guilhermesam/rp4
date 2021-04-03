import { Router } from 'express'

import loginController from '../useCases/Login/LoginController'

const router = Router()

router.post('/login', (req, res) => {
  return loginController.handle(req, res)
})

export default router
