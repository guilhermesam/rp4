import 'reflect-metadata'

import express from 'express'

import router from './router'
import {
  generateIDMiddleware,
  getDatetimeMiddleware
} from './middlewares/DataLayer/'

const app = express()

app.use(express.json())
app.use(router)
app.use(getDatetimeMiddleware)
app.use(generateIDMiddleware)

export default app
