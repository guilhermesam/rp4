import { Auctioneer } from '../../../entities'
import IChangeableBaseRepository from '../IChangeableBaseRepository'

export default interface IAuctioneersRepository<T> extends IChangeableBaseRepository<T> {
  searchAll(): Promise <Auctioneer[]>
  searchById(id: string): Promise<Auctioneer>
  searchByName(name: string): Promise<Auctioneer>
  searchByEmail (email: string): Promise<Auctioneer>
  searchByAuction (id: string): Promise<Auctioneer>
}
