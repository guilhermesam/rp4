import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class CreateAuctionTable1613246315770 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'Auctions',
      columns: [
        {
          name: 'id',
          type: 'varchar',
          isPrimary: true
        },
        {
          name: 'start',
          type: 'datetime',
          isNullable: false,
          isUnique: false
        },
        {
          name: 'end',
          type: 'datetime',
          isNullable: false,
          isUnique: false
        }
      ]
    }))
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('Auctions')
  }
}
