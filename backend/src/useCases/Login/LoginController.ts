import { Request, Response } from 'express'
import loginUseCase from './LoginUseCase'

class LoginController {
  async handle (request: Request, response: Response) {
    const { email, password } = request.body

    await loginUseCase.execute({ email, password })
      .then(loginData => {
        const token: string = loginData
        return response.status(200).json({
          token
        })
      })
      .catch((error) => {
        return response.status(404).json({
          message: error.message
        })
      })
  }
}

export default new LoginController()
