import 'reflect-metadata'

import express, { Application } from 'express'

import databaseConnection from './repositories/connect'
import * as routes from './routes'

import {
  generateIDMiddleware,
  getDatetimeMiddleware
} from './middlewares/DataLayer/'

class App {
  private readonly server: Application;

  constructor (private readonly port: number = 3333) {
    this.server = express()
  }

  private setGlobalMiddlewares (): void {
    console.log('setting global middlewares')
    this.server.use(express.json())
    this.server.use(getDatetimeMiddleware)
    this.server.use(generateIDMiddleware)
  }

  private setRoutes (): void {
    console.log('setting routes')
    Object.values(routes).forEach(route => this.server.use(route))
  }

  private async connectToDatabase (): Promise<void> {
    console.log('connecting to database')
    await databaseConnection()
    console.log('Successfully connected to database!')
  }

  private async setupServer (): Promise<void> {
    await this.connectToDatabase()
    this.setGlobalMiddlewares()
    this.setRoutes()
  }

  public getServerInstance (): Application {
    return this.server
  }

  public async initServer (): Promise<void> {
    await this.setupServer()
    this.server.listen(this.port, () => {
      console.log(`Server Running at http://localhost:${this.port}`)
    })
  }
}

export default App
