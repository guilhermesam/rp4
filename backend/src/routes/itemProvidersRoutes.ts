import { Router } from 'express'

import createItemProvidersController from '../useCases/ManageItemProviders/CreateItemProviders/CreateItemProvidersController'
import searchItemProvidersController from '../useCases/ManageItemProviders/SearchItemProviders/SearchItemProvidersController'
import { SearchByName } from '../useCases/ManageItemProviders/SearchItemProviders/SearchStrategies'

const router = Router()

router.post('/itemProviders/create', (req, res) => {
  return createItemProvidersController.handle(req, res)
})

router.get('/itemProvider/search/:name', (req, res) => {
  searchItemProvidersController.setStrategy(new SearchByName())
  return searchItemProvidersController.handle(req, res)
})

export default router
