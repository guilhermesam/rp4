import { AuctionItem } from '../../../entities/'
import { getConnection } from 'typeorm'
import IDeleteItemsDTO from '../../../useCases/ManageItems/DeleteItems/IDeleteItemsDTO'
import ManageItemsRepository from './ManageItemsRepository'

export default class DeleteItemsRepository extends ManageItemsRepository {
  async execute (data: IDeleteItemsDTO) {
    await getConnection()
      .createQueryBuilder()
      .delete()
      .from(AuctionItem)
      .where('id = :id', { id: data.id })
      .execute()
  }
}
