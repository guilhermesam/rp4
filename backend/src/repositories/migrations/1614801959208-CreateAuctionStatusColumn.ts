import { TableColumn, MigrationInterface, QueryRunner } from 'typeorm'

export class CreateAuctionStatusColumn1614801959208 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn('Auctions', new TableColumn({
      name: 'closed',
      type: 'tinyint',
      isNullable: false,
      default: 0
    }))
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('Auctions', 'closed')
  }
}
