import { Request, Response } from 'express'
import ILoginDTO from './ILoginDTO'

interface ILoginUseCase {
  execute(data: ILoginDTO): Promise<string>
}

class LoginController {
  private loginUseCase: ILoginUseCase

  setRole (roleUseCase: ILoginUseCase) {
    this.loginUseCase = roleUseCase
  }

  handle (request: Request, response: Response) {
    const { email, password } = request.body

    this.loginUseCase.execute({ email, password })
      .then(token => {
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
