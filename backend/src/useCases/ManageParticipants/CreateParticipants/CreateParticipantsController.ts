import { Request, Response } from 'express'
import createParticipantUseCase from './CreateParticipantsUseCase'

class CreateParticipantController {
    handle(request: Request, response: Response) {
        const { name, userName, password, email, address, phone } = request.body
        const id = request.body.id

        try {
            createParticipantUseCase.execute({
                id,
                name,
                userName,
                password,
                email,
                address,
                phone
            })
            return response.status(201).send()
        } catch (error) {
            return response.status(400).json({
                message: error.message || 'Unexpected error occured!'
            })
        }
    }
}

export default new CreateParticipantController()
