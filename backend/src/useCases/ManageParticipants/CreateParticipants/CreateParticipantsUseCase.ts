import ParticipantsMapper from '../../../repositories/implementations/Participant/ParticipantsMapper'
import ParticipantsRepository from '../../../repositories/implementations/Participant/ParticipantsRepository'
import IParticipantsRepository from '../../../repositories/implementations/Participant/IParticipantsRespository'
import IParticipantsDTO from '../../../repositories/implementations/Participant/IParticipantsDTO'

// import bcrypt from 'bcryptjs'

class CreateParticipantsUseCase {
  private participantsRepository: IParticipantsRepository<any>

  constructor (
    participantsRepository: IParticipantsRepository<any>
  ) {
    this.participantsRepository = participantsRepository
  }

  async execute (data: IParticipantsDTO) {
    const userExists = await this.participantsRepository.searchByEmail(data.email)

    if (userExists) {
      throw new Error('E-mail já cadastrado')
    }

    // data.password = bcrypt.hashSync(data.password, 8)

    const itemData = ParticipantsMapper.toPersistence(data)
    this.participantsRepository.create(itemData)
  }
}

export default new CreateParticipantsUseCase(
  new ParticipantsRepository()
)
