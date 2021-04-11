import { getRepository } from 'typeorm'
import { ItemProvider } from '../../../entities'
import { IItemProvidersDTO } from './IItemProvidersDTO'

export default class ItemProvidersMapper {
  static toPersistence (itemProviderDTO: IItemProvidersDTO): ItemProvider {
    return getRepository(ItemProvider).create({
      id: itemProviderDTO.id,
      name: itemProviderDTO.name,
      email: itemProviderDTO.email,
      address: itemProviderDTO.address,
      phone: itemProviderDTO.phone
    })
  }
}
