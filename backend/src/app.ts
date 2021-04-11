import 'reflect-metadata'

import express from 'express'

import {
  auctionBidsRoutes,
  auctioneersRoutes,
  auctionItemsRoutes,
  auctionRoutes,
  categoriesRoutes,
  itemProvidersRoutes,
  loginRoutes,
  participantsRoutes
} from './routes'

import {
  generateIDMiddleware,
  getDatetimeMiddleware
} from './middlewares/DataLayer/'

const app = express()

app.use(express.json())
app.use(getDatetimeMiddleware)
app.use(generateIDMiddleware)
app.use(auctionItemsRoutes)
app.use(auctionBidsRoutes)
app.use(auctionRoutes)
app.use(categoriesRoutes)
app.use(itemProvidersRoutes)
app.use(loginRoutes)
app.use(participantsRoutes)
app.use(auctioneersRoutes)

export default app
