import { getRepository } from 'typeorm'
import { AuctionBid } from '../../../entities'
import IAuctionBidsRepository from './IAuctionBidsRepository'

export default class AuctionBidsRepository implements IAuctionBidsRepository {
  async create (data: AuctionBid): Promise<void> {
    const auctionBid = getRepository(AuctionBid).create({
      id: data.id,
      date: data.date,
      value: data.value,
      participantId: data.participantId,
      auctionItemId: data.auctionItemId
    })

    await getRepository(AuctionBid).save(auctionBid)
  }

  async searchAll (): Promise<AuctionBid[]> {
    return await getRepository(AuctionBid).find()
  }

  async getHighestBid (auctionItemId: string): Promise<AuctionBid> {
    return await getRepository(AuctionBid)
      .findOne({ where: { auctionItemId: auctionItemId }, order: { value: 'ASC' } })
  }
}
