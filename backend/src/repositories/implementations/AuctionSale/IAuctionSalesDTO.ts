export default interface IAuctionSalesDTO {
    id: string
    date: Date
    value?: number
    auctionItemId?: string
    participantId?: string
    auctioneerId?: string
}
