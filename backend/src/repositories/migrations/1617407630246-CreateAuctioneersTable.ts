import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class CreateAuctioneersTable1617407630246 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'Auctioneers',
      columns: [
        {
          name: 'id',
          type: 'varchar',
          isPrimary: true
        },
        {
          name: 'name',
          type: 'varchar'
        },
        {
          name: 'address',
          type: 'varchar'
        },
        {
          name: 'email',
          type: 'varchar'
        },
        {
          name: 'password',
          type: 'varchar'
        },
        {
          name: 'phone',
          type: 'varchar',
          length: '11'
        },
        {
          name: 'joinedAt',
          type: 'datetime'
        }
      ]
    }))
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('Auctioneers')
  }
}
