import IParticipantsRepository from '../../repositories/implementations/Participant/IParticipantsRespository'
import ParticipantsRepository from '../../repositories/implementations/Participant/ParticipantsRepository'
import ILoginDTO from './ILoginDTO'

import LoginTemplate from './LoginTemplate'

class LoginParticipant extends LoginTemplate {
  private participantsRepository: IParticipantsRepository<any>

  constructor (participantsRepository: IParticipantsRepository<any>) {
    super()
    this.participantsRepository = participantsRepository
  }

  async execute (data: ILoginDTO): Promise<string> {
    const user = await this.findUser(data.email, this.participantsRepository)
    await this.checkPassword(data.password, user.password)

    return this.generateNewToken(user.id)
  }
}

export default new LoginParticipant(
  new ParticipantsRepository()
)
