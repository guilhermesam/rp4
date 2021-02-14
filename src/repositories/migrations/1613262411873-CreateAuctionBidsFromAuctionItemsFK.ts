import { MigrationInterface, QueryRunner, TableColumn, TableForeignKey } from 'typeorm'

export class CreateAuctionBidsFromAuctionItemsFK1613262411873 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn('AuctionBids', new TableColumn({
      name: 'auctionItemID',
      type: 'varchar'
    }))

    await queryRunner.createForeignKey('AuctionBids', new TableForeignKey({
      columnNames: ['auctionItemID'],
      referencedColumnNames: ['id'],
      referencedTableName: 'AuctionItems',
      onDelete: 'CASCADE'
    }))
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    const auctionBidsTable = await queryRunner.getTable('AuctionBids')
    const auctionBidsForeignKey = auctionBidsTable.foreignKeys.find(fk => fk.columnNames.indexOf('auctionItemID') !== -1)
    await queryRunner.dropForeignKey('AuctionBids', auctionBidsForeignKey)
    await queryRunner.dropColumn('AuctionBids', 'auctionItemID')
  }
}
