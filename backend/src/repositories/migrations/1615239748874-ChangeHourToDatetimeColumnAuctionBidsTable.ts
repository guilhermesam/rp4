import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm'

export class ChangeHourToDatetimeColumnAuctionBidsTable1615239748874 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.changeColumn('AuctionBids', 'hourBid', new TableColumn({
      name: 'date',
      type: 'datetime',
      isNullable: false
    }))
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.changeColumn('AuctionBids', 'date', new TableColumn({
      name: 'hourBid',
      type: 'int',
      isNullable: false
    }))
  }
}
