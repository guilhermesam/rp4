import { Auction } from '../../../entities'
import IReadonlyBaseRepository from '../IReadonlyBaseRepository'

export default interface IAuctionsRepository<T> extends IReadonlyBaseRepository<T> {
    close(id: string): Promise<void>
    searchById(id: string): Promise<Auction>
    setAuctionEndDate(id: string, endDate: Date): Promise<void>
}
