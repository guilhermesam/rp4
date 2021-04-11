export default interface IReadonlyBaseRepository<T> {
    create(t: T): Promise<any>
    searchAll(): Promise<any>
}
