import { Participant } from '../../../entities'
import IChangeableBaseRepository from '../IChangeableBaseRepository'

export default interface IParticipantsRepository<T> extends IChangeableBaseRepository<T> {

    searchAll(): Promise <Participant[]> // ok
    searchById(id: string): Promise<Participant> // ok
    searchByName(name: string): Promise<Participant> // ok
    searchByEmail (email: string): Promise<Participant>
    searchByUserName(username: string): Promise<Participant> //ok
    // createParticipant(participant: Participant):Promise <Participant> //ok
    // update(participant: Participant): Promise<Participant> //ok
    // deleteParticipant(id: string): Promise<Participant> //ok
    // Adicionar metodos posteriores
}
