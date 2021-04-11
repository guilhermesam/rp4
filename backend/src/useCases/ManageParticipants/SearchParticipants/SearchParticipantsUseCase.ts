import { Participant } from '../../../entities'
import ParticipantsRepository from '../../../repositories/implementations/Participant/ParticipantsRepository'
import IParticipantsRepository from '../../../repositories/implementations/Participant/IParticipantsRespository'

class SearchParticipantsUseCase {
  private participantsRepository: IParticipantsRepository<any>

  constructor (participantsRepository?: IParticipantsRepository<any>) {
    this.participantsRepository = participantsRepository
  }

  async searchAll (): Promise<Participant[]> {
    return await this.participantsRepository.searchAll()
  }

  async searchId (id:string): Promise<Participant> {
    return await this.participantsRepository.searchById(id)
  }

  async searchName (name:string): Promise<Participant> {
    return await this.participantsRepository.searchByName(name)
  }
  
  async searchUserName (userName:string): Promise<Participant> {
    return await this.participantsRepository.searchByUserName(userName)
  }
  
  async searchEmail (email:string): Promise<Participant> {
    return await this.participantsRepository.searchByEmail(email)
  }



}

export default new SearchParticipantsUseCase(
  new ParticipantsRepository()
)
