import { Request, Response } from 'express'
import createItemProvidersUseCase from './CreateItemProvidersUseCase'

class CreateItemProvidersController {
  handle (request: Request, response: Response) {
    const { id, name, email, address, phone } = request.body

    createItemProvidersUseCase.execute({
      id,
      name,
      email,
      address,
      phone
    }).then(() => {
      return response.status(201).send()
    }).catch((error) => {
      return response.status(400).json({
        message: error.message || 'Unexpected error'
      })
    })
  }
}

export default new CreateItemProvidersController()
