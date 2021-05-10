import { Router } from 'express'

import { SearchAllCategories, SearchById } from '../useCases/ManageCategories/SearchCategory/SearchStrategies'
import searchCategoryController from '../useCases/ManageCategories/SearchCategory/SearchCategoryController'

const router = Router()

router.get('/categories/search/allCategories', (req, res) => {
  searchCategoryController.setStrategy(new SearchAllCategories())
  return searchCategoryController.handle(req, res)
})

router.get('/categories/search/:id', (req, res) => {
  searchCategoryController.setStrategy(new SearchById())
  return searchCategoryController.handle(req, res)
})

export default router
