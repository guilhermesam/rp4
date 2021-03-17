export default interface IAuctionsDTO {
    id: string
    start: Date,
    end?: Date,
    closed?: number,
    items: string[]
}
