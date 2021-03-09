export default interface IChangeableBaseRepository<T> {
    create(t: T): Promise<any>
    delete(id: string): Promise<any>
    update(t: T): Promise<any>
    searchAll(): Promise<any>
}
