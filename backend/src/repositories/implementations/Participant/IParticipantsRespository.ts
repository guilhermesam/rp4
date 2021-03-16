import { Participant } from '../../../entities'
import IReadonlyBaseRepository from '../IReadonlyBaseRepository'

export default interface IParticipantsRepository extends IReadonlyBaseRepository<Participant> {
    searchAll():Promise <Participant[]> //ok
    create(participant: Participant):Promise <void> //ok
    searchById(id: string): Promise<Participant> //ok
    searchByName(name: string): Promise<Participant> //ok
    updateParticipant(participant: Participant): Promise <void> //ok
    deleteParticipant(id: string): Promise <void> //ok
    // Adicionar metodos posteriores
}
