import { Router } from 'express'
import { createItemsController } from './useCases/ManageItems/CreateItems'
import { deleteItemsController } from './useCases/ManageItems/DeleteItems'
import { searchItemsController } from './useCases/ManageItems/SearchItems'

const router = Router()

router.get('/', (req, res) => {
  return res.send('Hello World')
})

router.post('/items/create', (req, res) => {
  return createItemsController.handle(req, res)
})

router.delete('/items/delete', (req, res) => {
  return deleteItemsController.handle(req, res)
})

router.get('/items/', (req, res) => {
  return searchItemsController.handle(req, res)
})

export { router }
