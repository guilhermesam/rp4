import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm'

export class CreateDatetimeFieldAuctionBids1615830361616 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn('AuctionBids', new TableColumn({
      name: 'datetime',
      type: 'datetime',
      isNullable: false
    }))
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('AuctionBids', 'datetime')
  }
}
