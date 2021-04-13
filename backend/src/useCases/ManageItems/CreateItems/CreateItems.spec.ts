import request from 'supertest'
import { getRepository } from 'typeorm'

import '../../../repositories/connect'

import App from '../../../app'
import { AuctionItem } from '../../../entities'

const app = new App()

describe('Creating an Auction Item Test', () => {
  test('testing with right parameters', async done => {
    const data = {
      title: 'Item BB',
      description: 'produto bom',
      minimumBid: 200.5,
      imagePath: 'abc@abc.com'
    }

    const auctionItem = getRepository(AuctionItem)

    await auctionItem.count().then(async count => {
      await request(app.getServerInstance())
        .post('/items/create')
        .send(data)
        .then(async () => {
          await auctionItem.count().then(newCount => {
            expect(newCount).toBe(count + 1)
          })
          done()
        })
        .catch((error) => {
          console.log(error)
          done()
        })
    })
  })
})

/**
 * await Service.count().then(async function (count) {

    await request(app.getServerInstance)
        .post('/api/services')
        .send(service)
        .then(async () => {
            await Service.count().then(function (newcount) {
                expect(newcount).toBe(count + 1);
            });
        })
        .catch(err => console.log(`Error ${err}`));
});
});
 */
