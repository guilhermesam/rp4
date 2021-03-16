import ParticipantsMapper from '../../../repositories/implementations/Participant/ParticipantsMapper'
import ParticipantsRepository from '../../../repositories/implementations/Participant/ParticipantsRepository'
import IParticipantsRepository from '../../../repositories/implementations/Participant/IParticipantsRespository'
import IParticipantsDTO from '../../../repositories/implementations/Participant/IParticipantsDTO'

class CreateParticipantUseCase {
  private participantsRepository: IParticipantsRepository

  constructor (
    participantsRepository: IParticipantsRepository
  ) {
    this.participantsRepository = participantsRepository
  }

  execute (data: IParticipantsDTO) {
    const itemData = ParticipantsMapper.toPersistence(data)
    this.participantsRepository.create(itemData)
  }
}

export default new CreateParticipantUseCase(
  new ParticipantsRepository()
)
