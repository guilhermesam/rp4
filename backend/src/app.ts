import 'reflect-metadata'

import express from 'express'
import { router } from './routes'
import { generateIDMiddleware } from './middlewares/DataLayer/'

const app = express()

app.use(express.json())
app.use(generateIDMiddleware)
app.use(router)

export { app }
