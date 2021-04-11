import { getRepository } from 'typeorm'
import { Auctioneer } from '../../../entities'
import IAuctioneersRepository from './IAuctioneersRepository'

export default class AuctioneersRepository implements IAuctioneersRepository<Auctioneer> {
  async searchAll (): Promise<Auctioneer[]> {
    return await getRepository(Auctioneer).find()
  }

  async searchById (id: string): Promise<Auctioneer> {
    return await getRepository(Auctioneer).findOne({ where: { id } })
  }

  async searchByName (name: string): Promise<Auctioneer> {
    return await getRepository(Auctioneer).findOne({ where: { name: name } })
  }

  async searchByEmail (email: string): Promise<Auctioneer> {
    return await getRepository(Auctioneer).findOne({ where: { email } })
  }

  async create (data: Auctioneer): Promise<void> {
    await getRepository(Auctioneer).save(data)
  }

  async delete (id: string): Promise<void> {
    await getRepository(Auctioneer).delete(id)
  }

  async update (data: Auctioneer): Promise<any> {
    await getRepository(Auctioneer).save(data)
  }
}
