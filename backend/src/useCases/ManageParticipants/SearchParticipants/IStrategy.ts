import { Participant } from '../../../entities'
import SearchParticipantsUseCase from './SearchParticipantsUseCase'

export interface IStrategy {
    search(searchParticipantsUseCase: typeof SearchParticipantsUseCase, param?: any): Promise<Participant[]>
}
