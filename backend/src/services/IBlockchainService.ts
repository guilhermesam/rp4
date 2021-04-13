export interface IChain {
    result: {
        // eslint-disable-next-line camelcase
        tax_id: string;
    }
     error: any
     errorData: any
}

export interface IChainPayload {
    fcn: string;
    peers: string[];
    ChainCodeName: string;
    args: string[]
}

export default interface IBlockchainService {
    createChain(payload: IChainPayload): Promise<IChain>
}
