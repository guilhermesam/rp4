import { MigrationInterface, QueryRunner } from 'typeorm'

export class ChangeAuctionFKinAuctionItemToNullable1617331042475 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('ALTER TABLE rp4.auctionitems MODIFY COLUMN auctionID varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL;')
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('ALTER TABLE rp4.auctionitems MODIFY COLUMN auctionID varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL;')
  }
}
