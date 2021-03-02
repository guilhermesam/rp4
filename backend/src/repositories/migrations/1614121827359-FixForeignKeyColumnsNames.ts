import { MigrationInterface, QueryRunner } from 'typeorm'

export class FixForeignKeyColumnsNames1614121827359 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.renameColumn('AuctionBids', 'auctionItemIDId', 'auctionItemID')
    await queryRunner.renameColumn('AuctionItems', 'auctionIDId', 'auctionID')
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.renameColumn('AuctionBids', 'auctionItemID', 'auctionItemIDId')
    await queryRunner.renameColumn('AuctionItems', 'auctionID', 'auctionIDId')
  }
}
