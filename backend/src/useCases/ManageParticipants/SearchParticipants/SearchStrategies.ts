import { IStrategy } from './IStrategy'
import SearchParticipantsUseCase from './SearchParticipantsUseCase'

class SearchAllParticipants implements IStrategy {
  async search (searchParticipantsUseCase: typeof SearchParticipantsUseCase): Promise<any> {
    return await searchParticipantsUseCase.searchAll()
  }
}

class SearchParticipantsName implements IStrategy {
  async search (searchParticipantsUseCase: typeof SearchParticipantsUseCase, param: any): Promise<any> {
    return await searchParticipantsUseCase.searchName(param.name)
  }
}

class SearchParticipantsId implements IStrategy {
  async search (searchParticipantsUseCase: typeof SearchParticipantsUseCase, param: any): Promise<any> {
    return await searchParticipantsUseCase.searchId(param.id)
  }
}


class SearchParticipantsUserName implements IStrategy {
  async search (searchParticipantsUseCase: typeof SearchParticipantsUseCase, param: any): Promise<any> {
    return await searchParticipantsUseCase.searchUserName(param.userName)
  }
}

class SearchParticipantsEmail implements IStrategy {
  async search (searchParticipantsUseCase: typeof SearchParticipantsUseCase, param: any): Promise<any> {
    return await searchParticipantsUseCase.searchEmail(param.email)
  }
}


export {
  SearchAllParticipants,
  SearchParticipantsId,
  SearchParticipantsName,
  SearchParticipantsUserName,
  SearchParticipantsEmail
}
