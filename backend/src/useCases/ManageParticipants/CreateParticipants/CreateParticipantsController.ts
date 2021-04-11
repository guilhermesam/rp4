import { Request, Response } from 'express'
import createParticipantUseCase from './CreateParticipantsUseCase'

class CreateParticipantController {
  handle (request: Request, response: Response) {
    const {
      id, name, userName, password, email, address, phone
    } = request.body

    createParticipantUseCase.execute({
      id,
      name,
      userName,
      password,
      email,
      address,
      phone
    })
      .then(() => {
        return response.status(201).send()
      })
      .catch((error) => {
        return response.status(400).json({
          message: error.message || 'Unexpected error occured!'
        })
      })
  }
}

export default new CreateParticipantController()
