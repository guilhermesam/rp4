import { Participant } from '../../../entities'
import { IStrategy } from './IStrategy'
import SearchParticipantsUseCase from './SearchParticipantsUseCase'


class SearchAllParticipants implements IStrategy {
  async search (searchParticipantsUseCase: SearchParticipantsUseCase): Promise<Participant[]> {
    return await searchParticipantsUseCase.searchAll()
  }
}

export {
  SearchAllParticipants,
}
