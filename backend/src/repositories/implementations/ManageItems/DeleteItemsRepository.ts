import { AuctionItem } from '../../../entities/'
import { getConnection } from 'typeorm'
import IDeleteItemsDTO from '../../../useCases/ManageItems/DeleteItems/IDeleteItemsDTO'

export default class DeleteItemsRepository {
  async delete (data: IDeleteItemsDTO) {
    await getConnection()
      .createQueryBuilder()
      .delete()
      .from(AuctionItem)
      .where('id = :id', { id: data.id })
      .execute()
  }
}
