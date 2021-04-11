import { MigrationInterface, QueryRunner, TableColumn, TableForeignKey } from 'typeorm'

export class AuctioneerFKinAuctionsTable1617408678600 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn('Auctions', new TableColumn({
      name: 'auctioneerId',
      type: 'varchar'
    }))

    await queryRunner.createForeignKey('Auctions', new TableForeignKey({
      columnNames: ['auctioneerId'],
      referencedColumnNames: ['id'],
      referencedTableName: 'Auctioneers',
      onDelete: 'CASCADE'
    }))
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    const auctionsTable = await queryRunner.getTable('Auctions')
    const auctioneersForeignKey = auctionsTable.foreignKeys.find(fk => fk.columnNames.indexOf('auctioneerId') !== -1)
    await queryRunner.dropForeignKey('Auctions', auctioneersForeignKey)
    await queryRunner.dropColumn('Auctions', 'auctioneerId')
  }
}
