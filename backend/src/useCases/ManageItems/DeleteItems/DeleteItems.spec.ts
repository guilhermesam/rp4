import { createItemsUseCase } from '../CreateItems'
import ICreateItemDTO from '../CreateItems/ICreateItemsDTO'
import { DeleteItemsRepository } from '../../../repositories/implementations/ManageItems'

test('Delete Items', async () => {
  try {
    const itemData: ICreateItemDTO = {
      id: '123',
      title: 'Item A',
      description: 'Produto bom',
      minimumBid: 200,
      imagePath: 'www.image.com.br/image',
      finishedOff: 0
    }
  
    createItemsUseCase.execute(itemData)
    const deleteItemsRepository = new DeleteItemsRepository()
    
    await deleteItemsRepository.execute({id: '123'})
    const itemQuery = await deleteItemsRepository.findByID('123')
  
    expect(itemQuery.id).toBe(undefined)
  }
  catch (error) {
    expect(error).toMatch('error')
  }
})
