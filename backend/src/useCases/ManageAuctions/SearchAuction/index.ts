import SearchAuctionUseCase from './SearchAuctionUseCase'
import SearchAuctionsController from './SearchAuctionsController'
import { SearchAuctionRepository } from '../../../repositories/implementations/ManageAuctions'

const searchRepository = new SearchAuctionRepository()

const searchAuctionsUseCase = new SearchAuctionUseCase(searchRepository)

const searchAuctionsController = new SearchAuctionsController(searchAuctionsUseCase)

export {
  searchAuctionsUseCase,
  searchAuctionsController
}
