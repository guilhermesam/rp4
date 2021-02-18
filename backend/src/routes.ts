import { Router } from 'express'
import { createItemsController } from './useCases/ManageItems/CreateItem'

const router = Router()

router.get('/', (req, res) => {
  return res.send('Hello World')
})

router.post('/items', (req, res) => {
  return createItemsController.handle(req, res)
})

export { router }
