import { MigrationInterface, QueryRunner, TableColumn, TableForeignKey } from 'typeorm'

export class categoryIdinAuctionItemsTable1615405992967 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn('AuctionItems', new TableColumn({
      name: 'categoryId',
      type: 'varchar'
    }))
    await queryRunner.createForeignKey('AuctionItems', new TableForeignKey({
      columnNames: ['categoryId'],
      referencedColumnNames: ['id'],
      referencedTableName: 'categories',
      onDelete: 'CASCADE'
    }))
    await queryRunner.addColumn('AuctionItems', new TableColumn({
      name: 'itemProviderId',
      type: 'varchar'
    }))
    await queryRunner.createForeignKey('AuctionItems', new TableForeignKey({
      columnNames: ['itemProviderId'],
      referencedColumnNames: ['id'],
      referencedTableName: 'itemProviders',
      onDelete: 'CASCADE'
    }))
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    const auctionItemsTable = await queryRunner.getTable('AuctionItems')
    const foreignKeyAuctionItems = auctionItemsTable.foreignKeys.find(fk => fk.columnNames.indexOf('categoryId') !== -1)
    await queryRunner.dropForeignKey('AuctionItems', foreignKeyAuctionItems)
    await queryRunner.dropColumn('AuctionItems', 'categoryId')

    const foreignKeyProviders = auctionItemsTable.foreignKeys.find(fk => fk.columnNames.indexOf('itemProviderId') !== -1)
    await queryRunner.dropForeignKey('AuctionItems', foreignKeyProviders)
    await queryRunner.dropColumn('AuctionItems', 'itemProviderId')
  }
}
