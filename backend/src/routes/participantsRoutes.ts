import { Router } from 'express'
import {
  createParticipantsController,
  searchParticipantsController
} from '../useCases/ManageParticipants'

import {
  SearchAllParticipants,
  SearchParticipantsEmail,
  SearchParticipantsId,
  SearchParticipantsUserName
} from '../useCases/ManageParticipants/SearchParticipants/SearchStrategies'

const router = Router()



router.post('/participants/create', (req, res) => {
  
  return createParticipantsController.handle(req, res)
})
router.put('/participants/update/:id', (req, res) => {
  return createParticipantsController.handle(req, res)
})
router.delete('/participants/delete/:id', (req, res) => {
  return createParticipantsController.handle(req, res)
})

router.get('/participants/search/all', (req, res) => {
  searchParticipantsController.setStrategy(new SearchAllParticipants())
  return searchParticipantsController.handle(req, res)
})

router.get('/participants/search/:id', (req, res) => {
  searchParticipantsController.setStrategy(new SearchParticipantsId())
  return searchParticipantsController.handle(req, res)
})

router.get('/participants/search/userName/:userName', (req, res) => {
  searchParticipantsController.setStrategy(new SearchParticipantsUserName())
  return searchParticipantsController.handle(req, res)
})

router.get('/participants/search/email/:email', (req, res) => {
  searchParticipantsController.setStrategy(new SearchParticipantsEmail())
  return searchParticipantsController.handle(req, res)
})

export default router
