import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm'

export class RemoveHourBidFromAuctionBids1619302531093 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('AuctionBids', 'hourBid')
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn('AuctionBids', new TableColumn({
      name: 'hourBid',
      type: 'time',
      isNullable: false,
      isUnique: false
    }))
  }
}
