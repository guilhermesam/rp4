import { v4 } from 'uuid'

import AuctionItemsRepository from '../../../repositories/implementations/AuctionItem/AuctionItemsRepository'
import AuctionsRepository from '../../../repositories/implementations/Auction/AuctionsRepository'
import AuctionBidsRepository from '../../../repositories/implementations/AuctionBid/AuctionBidsRepository'
import AuctionSalesRepository from '../../../repositories/implementations/AuctionSale/AuctionSalesRepository'

import IAuctionItemsRepository from '../../../repositories/implementations/AuctionItem/IAuctionItemsRepository'
import IAuctionsRepository from '../../../repositories/implementations/Auction/IAuctionsRepository'
import IAuctionBidsRepository from '../../../repositories/implementations/AuctionBid/IAuctionBidsRepository'
import IAuctionSalesRepository from '../../../repositories/implementations/AuctionSale/IAuctionSalesRepository'

import AuctionSalesMapper from '../../../repositories/implementations/AuctionSale/AuctionSalesMapper'
import IFinishAuctionsDTO from './IFinishAuctionsDTO'

import { AuctionBid } from '../../../entities'
import { BlockchainService } from '../../../services'
import IAuctioneersRepository from '../../../repositories/implementations/Auctioneer/IAuctioneersRepository'
import AuctioneersRepository from '../../../repositories/implementations/Auctioneer/AuctioneersRepository'
import ParticipantsRepository from '../../../repositories/implementations/Participant/ParticipantsRepository'
import IParticipantsRepository from '../../../repositories/implementations/Participant/IParticipantsRespository'

class FinishAuctionsUseCase {
  private auctioneersRepository: IAuctioneersRepository<any>
  private auctionItemsRepository: IAuctionItemsRepository<any>
  private auctionsRepository: IAuctionsRepository<any>
  private auctionBidsRepository: IAuctionBidsRepository<any>
  private auctionSalesRepository: IAuctionSalesRepository<any>
  private participantsRepository: IParticipantsRepository<any>
  private readonly blockchainService: BlockchainService

  constructor (
    auctioneersRepository: IAuctioneersRepository<any>,
    auctionItemsRepository: IAuctionItemsRepository<any>,
    auctionsRepository: IAuctionsRepository<any>,
    auctionBidsRepository: IAuctionBidsRepository<any>,
    auctionSalesRepository: IAuctionSalesRepository<any>,
    participantsRepository: IParticipantsRepository<any>
  ) {
    this.auctioneersRepository = auctioneersRepository
    this.auctionItemsRepository = auctionItemsRepository
    this.auctionsRepository = auctionsRepository
    this.auctionBidsRepository = auctionBidsRepository
    this.auctionSalesRepository = auctionSalesRepository
    this.participantsRepository = participantsRepository
    this.blockchainService = new BlockchainService()
  }

  private async createHighestAuctionBidOnBlockchain (data: AuctionBid) {
    const sale = await this.auctionSalesRepository.getSaleByAuctionItemId(data.auctionItemId)
    const itemTitle = (await this.auctionItemsRepository.searchById(data.auctionItemId)).title
    const auctioneerName = (await this.auctioneersRepository.searchById(sale.auctioneerId)).name
    const participantName = (await this.participantsRepository.searchById(data.participantId)).name

    return this.blockchainService.createChain({
      fcn: 'createCar',
      ChainCodeName: 'fabcar',
      peers: ['peer0.org1.example.com', 'peer0.org2.example.com'],
      args: [
        v4(),
        new Date().toISOString(),
        itemTitle,
        auctioneerName,
        participantName
      ]
    })
  }

  async execute (data: IFinishAuctionsDTO): Promise<void> {
    const items = await this.auctionItemsRepository.searchItemsInAuction(data.id)
    const highestBids: AuctionBid[] = []

    items.forEach(async element => {
      const highestBid = await this.auctionBidsRepository.getHighestBid(element.id)

      if (!highestBid) {
        this.auctionItemsRepository.setAvailableStatus(element.id)
      } else {
        const auctioneerId = (await this.auctioneersRepository.searchByAuction(data.id)).id

        highestBids.push(highestBid)

        const saleData = AuctionSalesMapper.toPersistence({
          id: element.id,
          date: data.date,
          value: highestBid.value,
          participantId: highestBid.participantId,
          auctionItemId: element.id,
          auctioneerId: auctioneerId
        })

        console.log(saleData)

        this.auctionSalesRepository.create(saleData)
        this.auctionItemsRepository.setSoldStatus(element.id)
      }
    })

    this.auctionsRepository.close(data.id)
    this.auctionsRepository.setAuctionEndDate(data.id, data.date)

    highestBids.forEach(async highestBid => {
      await this.createHighestAuctionBidOnBlockchain(highestBid)
    })
  }
}

export default new FinishAuctionsUseCase(
  new AuctioneersRepository(),
  new AuctionItemsRepository(),
  new AuctionsRepository(),
  new AuctionBidsRepository(),
  new AuctionSalesRepository(),
  new ParticipantsRepository()
)
