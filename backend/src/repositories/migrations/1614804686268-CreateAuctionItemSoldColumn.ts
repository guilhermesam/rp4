import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm'

export class CreateAuctionItemSoldColumn1614804686268 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn('AuctionItems', new TableColumn({
      name: 'sold',
      type: 'tinyint',
      isNullable: false,
      default: 0
    }))
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('AuctionItems', 'sold')
  }
}
