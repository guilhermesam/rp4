export default interface ITransactionManager {
    addAction(method: Function, parameter: any): void
    reset(): void
    run(): Promise<void>
}
