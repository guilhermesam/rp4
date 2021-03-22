export default interface ITransactionsManager {
    addAction(method: Function, parameter: any): void
    reset(): void
    run(): Promise<void>
}
