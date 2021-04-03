import { Router } from 'express'

import createItemProvidersController from '../useCases/ManageItemProviders/CreateItemProviders/CreateItemProvidersController'

const router = Router()

router.post('/itemProviders/create', (req, res) => {
  return createItemProvidersController.handle(req, res)
})

export default router
