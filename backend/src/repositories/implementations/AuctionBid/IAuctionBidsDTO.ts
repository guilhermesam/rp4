export default interface IAuctionBidsDTO {
    id: string
    datetime: Date
    value: number
    auctionItemId: string
    participantId: string
}
