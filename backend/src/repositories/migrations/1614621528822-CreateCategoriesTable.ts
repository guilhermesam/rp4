import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class CreateCategoriesTable1614621528822 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'Categories',
      columns: [
        {
          name: 'id',
          type: 'varchar',
          isPrimary: true,
          length: '255'
        },
        {
          name: 'name',
          type: 'varchar',
          isNullable: false,
          length: '32'
        }
      ]
    }))
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('Categories')
  }
}
