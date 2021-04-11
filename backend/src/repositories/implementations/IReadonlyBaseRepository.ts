export default interface IReadonlyBaseRepository<T> {
    create(t: T): Promise<T>
    searchAll(): Promise<T[]>
}
