import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm'

export class CreateAuctionSalesTable1614809744854 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'AuctionSales',
      columns: [
        {
          name: 'id',
          type: 'varchar',
          isPrimary: true,
          length: '255'
        },
        {
          name: 'date',
          type: 'datetime',
          isNullable: false
        },
        {
          name: 'value',
          type: 'double',
          isNullable: false
        },
        {
          name: 'participantID',
          type: 'varchar',
          length: '255',
          isNullable: false
        },
        {
          name: 'auctionItemID',
          type: 'varchar',
          length: '255',
          isNullable: false
        }
      ]
    }))

    await queryRunner.createForeignKey('AuctionSales', new TableForeignKey({
      columnNames: ['participantID'],
      referencedColumnNames: ['id'],
      referencedTableName: 'Participants',
      onDelete: 'CASCADE'
    }))

    await queryRunner.createForeignKey('AuctionSales', new TableForeignKey({
      columnNames: ['auctionItemID'],
      referencedColumnNames: ['id'],
      referencedTableName: 'AuctionItems',
      onDelete: 'CASCADE'
    }))
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('AuctionSales')
  }
}
