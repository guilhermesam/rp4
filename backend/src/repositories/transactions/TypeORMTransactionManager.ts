import { getConnection } from 'typeorm'

import ITransactionsManager from './ITransactionManager'

export default class TypeORMTransactionManager implements ITransactionsManager {
  private actions: Function[]
  private parameters: any[]

  constructor () {
    this.actions = []
    this.parameters = []
  }

  addAction (method: Function, parameter: any[]): void {
    this.actions.push(method)
    this.parameters.push(parameter)
  }

  reset () {
    this.actions = []
    this.parameters = []
  }

  async run (): Promise<void> {
    const queryRunner = getConnection().createQueryRunner()

    await queryRunner.connect()

    await queryRunner.startTransaction()
      .then(() => {
        for (let i = 0; i < this.actions.length; i++) {
          this.actions[i](...this.parameters[i])
        }
        queryRunner.commitTransaction()
      })
      .catch(() => {
        queryRunner.rollbackTransaction()
      })
      .finally(() => {
        queryRunner.release()
      })
  }
}
