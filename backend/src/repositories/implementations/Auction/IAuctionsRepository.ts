import { Auction } from '../../../entities'
import IReadonlyBaseRepository from '../IReadonlyBaseRepository'

export default interface IAuctionsRepository extends IReadonlyBaseRepository<Auction> {
    close(id: string): Promise<void>
    searchById(id: string): Promise<Auction>
}
