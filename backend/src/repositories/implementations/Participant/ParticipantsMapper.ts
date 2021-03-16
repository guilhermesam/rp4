import { getRepository } from 'typeorm'
import { Participant } from '../../../entities'
import IParticipantsDTO from './IParticipantsDTO'

export default class ParticipantsMapper {
  static toPersistence (participantsDTO: IParticipantsDTO): Participant {
    const repository = getRepository(Participant)
    return repository.create({
        id: participantsDTO.id,
        name: participantsDTO.name,
        username: participantsDTO.userName,
        password: participantsDTO.password,
        email: participantsDTO.email,
        address: participantsDTO.address,
        phone: participantsDTO.phone
    })
  }
}
