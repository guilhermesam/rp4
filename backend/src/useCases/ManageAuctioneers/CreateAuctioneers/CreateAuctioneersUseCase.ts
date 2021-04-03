import AuctioneersMapper from '../../../repositories/implementations/Auctioneer/AuctioneersMapper'
import AuctioneersRepository from '../../../repositories/implementations/Auctioneer/AuctioneersRepository'
import IAuctioneersDTO from '../../../repositories/implementations/Auctioneer/IAuctioneersDTO'
import IAuctioneersRepository from '../../../repositories/implementations/Auctioneer/IAuctioneersRepository'

class CreateAuctioneersUseCase {
  private auctioneersRepository: IAuctioneersRepository<any>

  constructor (auctioneersRepository: IAuctioneersRepository<any>) {
    this.auctioneersRepository = auctioneersRepository
  }

  async execute (data: IAuctioneersDTO) {
    const auctioneerData = AuctioneersMapper.toPersistence(data)
    await this.auctioneersRepository.create(auctioneerData)
  }
}

export default new CreateAuctioneersUseCase(
  new AuctioneersRepository()
)
