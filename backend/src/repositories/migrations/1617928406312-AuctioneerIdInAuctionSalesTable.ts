import { MigrationInterface, QueryRunner, TableColumn, TableForeignKey } from 'typeorm'

export class AuctioneerIdInAuctionSalesTable1617928406312 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn('AuctionSales', new TableColumn({
      name: 'auctioneerId',
      type: 'varchar'
    }))

    await queryRunner.createForeignKey('AuctionSales', new TableForeignKey({
      columnNames: ['auctioneerId'],
      referencedColumnNames: ['id'],
      referencedTableName: 'Auctioneers',
      onDelete: 'CASCADE'
    }))
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    const auctionsSalesTable = await queryRunner.getTable('AuctionSales')
    const auctioneersForeignKey = auctionsSalesTable.foreignKeys.find(fk => fk.columnNames.indexOf('auctioneerId') !== -1)
    await queryRunner.dropForeignKey('AuctionSales', auctioneersForeignKey)
    await queryRunner.dropColumn('AuctionSales', 'auctioneerId')
  }
}
