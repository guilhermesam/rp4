export default interface ICreateItemDTO {
    id?: string,
    title: string,
    description: string,
    minimumBid: number,
    imagePath: string,
    finishedOff: number
}
