import Request from '../shared/Request'
import IBlockchainService, { IChain, IChainPayload } from './IBlockchainService'

export default class BlockChainService implements IBlockchainService {
  constructor (private readonly requestClient: Request = new Request()) {}

  public async createChain (payload: IChainPayload): Promise<IChain> {
    const { data } = await this.requestClient.post<IChain>(`${process.env.BLOCKCHAIN_SERVICE_BASE_URL}/channels/mychannel/chaincodes/fabcar`, payload, {
      headers: {
        authorization: `Bearer ${process.env.BLOCKCHAIN_SERVICE_TOKEN}`
      }
    })
    return data
  }

  public async listChains (): Promise<IChain[]> {
    const { data } = await this.requestClient.get<IChain[]>(process.env.BLOCKCHAIN_SERVICE_BASE_URL + '/list/example' as string, {
      headers: {
        authorization: `Bearer ${process.env.BLOCKCHAIN_SERVICE_TOKEN}`
      }
    })

    return data
  }
}
