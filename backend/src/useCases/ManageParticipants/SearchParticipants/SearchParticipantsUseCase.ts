import { Participant } from '../../../entities'
import ParticipantsRepository from '../../../repositories/implementations/Participant/ParticipantsRepository'

export default class SearchParticipantsUseCase {
  searchAll (): Promise<Participant[]> {
    const participantsRepository = new ParticipantsRepository()
    return participantsRepository.searchAll()
  }

  searchId (id:string): Promise<Participant> {
    const participantsRepository = new ParticipantsRepository()
    return participantsRepository.searchById(id)
  }
  searchName (name:string): Promise<Participant> {
    const participantsRepository = new ParticipantsRepository()
    return participantsRepository.searchByName(name)
  }
}
