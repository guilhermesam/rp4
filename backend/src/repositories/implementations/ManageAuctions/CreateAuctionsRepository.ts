import { getConnection } from 'typeorm'
import { Auction } from '../../../entities/'
import ICreateAuctionsDTO from '../../../useCases/ManageAuctions/CreateAuctions/ICreateAuctionsDTO'
import ManageItemsRepository from '../ManageItems/ManageItemsRepository'

export default class CreateAuctionsRepository extends ManageItemsRepository {
  async execute (data: ICreateAuctionsDTO) {
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
