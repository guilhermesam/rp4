import AuctioneersMapper from '../../../repositories/implementations/Auctioneer/AuctioneersMapper'
import AuctioneersRepository from '../../../repositories/implementations/Auctioneer/AuctioneersRepository'
import IAuctioneersDTO from '../../../repositories/implementations/Auctioneer/IAuctioneersDTO'
import IAuctioneersRepository from '../../../repositories/implementations/Auctioneer/IAuctioneersRepository'

import bcrypt from 'bcryptjs'

class CreateAuctioneersUseCase {
  private auctioneersRepository: IAuctioneersRepository<any>

  constructor (auctioneersRepository: IAuctioneersRepository<any>) {
    this.auctioneersRepository = auctioneersRepository
  }

  async execute (data: IAuctioneersDTO) {
    data.password = bcrypt.hashSync(data.password, 8)
    const auctioneerData = AuctioneersMapper.toPersistence(data)

    await this.auctioneersRepository.create(auctioneerData)
  }
}

export default new CreateAuctioneersUseCase(
  new AuctioneersRepository()
)
