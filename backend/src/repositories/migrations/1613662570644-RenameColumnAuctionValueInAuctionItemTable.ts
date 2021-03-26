import { MigrationInterface, QueryRunner } from 'typeorm'

export class RenameColumnAuctionValueInAuctionItemTable1613662570644 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.renameColumn('AuctionItems', 'minimumValue', 'minimumBid')
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.renameColumn('AuctionItems', 'minimumBid', 'minimumValue')
  }
}
