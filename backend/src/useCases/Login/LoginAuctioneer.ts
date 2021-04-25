import IAuctioneersRepository from '../../repositories/implementations/Auctioneer/IAuctioneersRepository'
import AuctioneersRepository from '../../repositories/implementations/Auctioneer/AuctioneersRepository'
import ILoginDTO from './ILoginDTO'

import LoginTemplate from './LoginTemplate'

class LoginAuctioneer extends LoginTemplate {
  private auctioneersRepository: IAuctioneersRepository<any>

  constructor (auctioneersRepository: IAuctioneersRepository<any>) {
    super()
    this.auctioneersRepository = auctioneersRepository
  }

  async execute (data: ILoginDTO): Promise<string> {
    const user = await this.findUser(data.email, this.auctioneersRepository)
    await this.checkPassword(data.password, user.password)

    return this.generateNewToken(user.id)
  }
}

export default new LoginAuctioneer(
  new AuctioneersRepository()
)
