import App from './app'

import './repositories/connect'

(async () => {
  const app = new App(3333)
  await app.initServer()
})()
