import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm'
import { AuctionItem } from '.'

@Entity('ItemProviders')
export default class ItemProviders {
    @PrimaryColumn()
    id: string

    @Column({ nullable: false })
    name: string

    @Column({ nullable: false })
    email: string

    @Column({ nullable: false })
    address: string

    @Column({ nullable: false })
    phone: string

    @OneToMany(() => AuctionItem, auctionItem => auctionItem.itemProvider)
    auctionItems: AuctionItem[]
}
