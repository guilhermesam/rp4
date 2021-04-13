import App from './app'

import './repositories/connect'

const PORT = process.env.PORT && !Number.isNaN(Number(process.env.PORT)) ? Number(process.env.PORT) : undefined;

(async () => {
  const app = new App(PORT)
  await app.initServer()
})()
