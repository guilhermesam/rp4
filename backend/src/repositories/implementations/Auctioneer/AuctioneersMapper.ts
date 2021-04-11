import { getRepository } from 'typeorm'
import { Auctioneer } from '../../../entities'
import IAuctioneersDTO from './IAuctioneersDTO'

export default class AuctioneersMapper {
  static toPersistence (auctioneerDTO: IAuctioneersDTO): Auctioneer {
    return getRepository(Auctioneer).create({
      id: auctioneerDTO.id,
      name: auctioneerDTO.name,
      address: auctioneerDTO.address,
      email: auctioneerDTO.email,
      password: auctioneerDTO.password,
      phone: auctioneerDTO.phone,
      joinedAt: auctioneerDTO.joinedAt
    })
  }
}
