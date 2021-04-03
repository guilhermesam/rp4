import { Request, Response } from 'express'
import createAuctioneersUseCase from './CreateAuctioneersUseCase'

class CreateAuctioneersController {
  handle (request: Request, response: Response) {
    const { id, name, address, email, phone, datetime } = request.body

    createAuctioneersUseCase.execute({
      id,
      name,
      address,
      email,
      phone,
      joinedAt: datetime
    })
      .then(() => {
        return response.status(201).send()
      })
      .catch((error) => {
        console.log(error)
        return response.status(400).json({
          message: error.message || 'Unexpected error'
        })
      })
  }
}

export default new CreateAuctioneersController()
