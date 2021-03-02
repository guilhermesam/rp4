import { getConnection } from 'typeorm'
import { Auction } from '../../../entities/'
import ICreateAuctionsDTO from '../../../useCases/ManageAuctions/CreateAuctions/ICreateAuctionsDTO'

export default class CreateAuctionsRepository {
  async create (data: ICreateAuctionsDTO) {
    await getConnection()
      .createQueryBuilder()
      .insert()
      .into(Auction)
      .values([
        {
          id: data.id,
          start: data.start
        }
      ])
      .execute()
  }
}
