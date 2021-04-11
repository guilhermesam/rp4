import { Router } from 'express'
import {
  createParticipantsController,
  searchParticipantsController
} from '../useCases/ManageParticipants'


import {
  SearchAllParticipants,
  SearchParticipantsId,
  SearchParticipantsUserName
} from '../useCases/ManageParticipants/SearchParticipants/SearchStrategies'

const router = Router()

router.post('/participants/create', (req, res) => {
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

router.get('/participants/search/username/:username',(req,res)=> {
  searchParticipantsController.setStrategy(new SearchParticipantsUserName())
  return searchParticipantsController.handle(req,res)
})

export default router
