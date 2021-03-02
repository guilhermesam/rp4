import { Entity, Column, PrimaryColumn, OneToMany } from 'typeorm'
import { AuctionItem } from '../entities'

@Entity('Categories')
export default class Category {
    @PrimaryColumn()
    id: string

    @Column()
    name: string

    @OneToMany(() => AuctionItem, auctionItem => auctionItem.category)
    auctionItems: AuctionItem[]
}
