import { Router } from 'express'
import createAuctioneersController from '../useCases/ManageAuctioneers/CreateAuctioneers/CreateAuctioneersController'

const router = Router()

router.post('/auctioneers/create', (req, res) => {
  return createAuctioneersController.handle(req, res)
})

export default router
