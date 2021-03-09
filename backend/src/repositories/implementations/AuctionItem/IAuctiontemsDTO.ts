export default interface IAuctionItemDTO {
    id?: string,
    title: string,
    description: string,
    minimumBid: number,
    imagePath: string,
    finishedOff: number,
    sold?: number,
    categoryId?: number,
    auctionId?: number
}
