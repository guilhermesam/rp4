import { MigrationInterface, QueryRunner, Table, TableColumn, TableForeignKey } from 'typeorm'

export class CreateAuctionItemsTable1613261327943 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'AuctionItems',
      columns: [
        {
          name: 'id',
          type: 'varchar',
          isPrimary: true
        },
        {
          name: 'title',
          type: 'varchar',
          length: '32',
          isNullable: false,
          isUnique: false
        },
        {
          name: 'description',
          type: 'varchar',
          length: '128',
          isNullable: false,
          isUnique: false
        },
        {
          name: 'minimumValue',
          type: 'double',
          isNullable: false,
          isUnique: false
        },
        {
          name: 'imagePath',
          type: 'varchar',
          length: '255',
          isNullable: false,
          isUnique: false
        },
        {
          name: 'finishedOff',
          type: 'tinyint',
          isNullable: false,
          isUnique: false,
          default: 0
        }
      ]
    }
    ))

    await queryRunner.addColumn('AuctionItems', new TableColumn({
      name: 'auctionID',
      type: 'varchar'
    }))

    await queryRunner.createForeignKey('AuctionItems', new TableForeignKey({
      columnNames: ['auctionID'],
      referencedColumnNames: ['id'],
      referencedTableName: 'Auctions',
      onDelete: 'CASCADE'
    }))
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    const auctionsTable = await queryRunner.getTable('Auctions')
    const auctionsForeignKey = auctionsTable.foreignKeys.find(fk => fk.columnNames.indexOf('auctionID') !== -1)
    await queryRunner.dropForeignKey('AuctionItems', auctionsForeignKey)
    await queryRunner.dropColumn('AuctionItems', 'auctionID')
  }
}
