import IParticipantsRepository from '../../repositories/implementations/Participant/IParticipantsRespository'
import ParticipantsRepository from '../../repositories/implementations/Participant/ParticipantsRepository'
import ILoginDTO from './ILoginDTO'

import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { Participant } from '../../entities'

class LoginUseCase {
  private participantsRepository: IParticipantsRepository<any>

  constructor (participantsRepository: IParticipantsRepository<any>) {
    this.participantsRepository = participantsRepository
  }

  async execute (data: ILoginDTO) {
    const participant: Participant = await this.participantsRepository.searchByEmail(data.email)

    if (!participant) {
      throw new Error('Usuário não encontrado')
    }

    const isValidPassword = await bcrypt.compare(data.password, participant.password)

    if (!isValidPassword) {
      throw new Error('Senhas não coincidem')
    }

    return jwt.sign({ id: participant.id }, 'secret', { expiresIn: 300 })
  }
}

export default new LoginUseCase(
  new ParticipantsRepository()
)
