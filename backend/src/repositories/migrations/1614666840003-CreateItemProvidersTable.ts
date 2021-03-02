import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class CreateItemProvidersTable1614666840003 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'ItemProviders',
      columns: [
        {
          name: 'id',
          type: 'varchar',
          length: '255',
          isPrimary: true
        },
        {
          name: 'name',
          type: 'varchar',
          length: '128',
          isNullable: false
        },
        {
          name: 'email',
          type: 'varchar',
          length: '128',
          isNullable: false
        },
        {
          name: 'address',
          type: 'varchar',
          length: '128',
          isNullable: false
        },
        {
          name: 'phone',
          type: 'varchar',
          length: '11',
          isNullable: false
        }
      ]
    }))
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('ItemProviders')
  }
}
