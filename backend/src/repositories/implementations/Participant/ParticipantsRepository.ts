import { getRepository } from 'typeorm'
import { Participant } from '../../../entities'
import IParticipantsRepository from './IParticipantsRespository'

export default class ParticipantsRepository implements IParticipantsRepository {
    
    async create(participant: Participant): Promise<void> {
        await getRepository(Participant).save(participant)
    }

    async searchById(id: string): Promise<Participant> {
        return await getRepository(Participant).findOne({ id: id })
    }
    async searchByName(name: string): Promise<Participant> {
        return await getRepository(Participant).findOne({ name: name })
    }

    async searchAll(): Promise<Participant[]> {
        return await getRepository(Participant).find()
    }

    async updateParticipant(participant: Participant): Promise<void> {
        await getRepository(Participant)
            .createQueryBuilder()
            .update(Participant)
            .set({
                id: participant.id,
                name: participant.name,
                username: participant.username,
                password: participant.password,
                email: participant.email,
                address: participant.address,
                phone: participant.phone
            }).where('Participants.id = :id', { id: participant.id })
            .execute()
    }

    async deleteParticipant(id: string) {
        await getRepository(Participant).delete({ id: id })
    }
}