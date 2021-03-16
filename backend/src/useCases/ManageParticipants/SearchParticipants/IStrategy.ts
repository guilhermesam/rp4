import { AuctionItem, Participant } from '../../../entities'
import SearchParticipantsUseCase from './SearchParticipantsUseCase'

export interface IStrategy {
    search(searchParticipantsUseCase: SearchParticipantsUseCase): Promise<Participant[]>
}
