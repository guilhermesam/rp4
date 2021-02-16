import { MigrationInterface, QueryRunner, TableColumn, TableForeignKey } from 'typeorm'

export class CreateAuctionBidsForeignKey1613242586548 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn('AuctionBids', new TableColumn({
      name: 'participantID',
      type: 'varchar'
    }))

    await queryRunner.createForeignKey('AuctionBids', new TableForeignKey({
      columnNames: ['participantID'],
      referencedColumnNames: ['id'],
      referencedTableName: 'Participants',
      onDelete: 'CASCADE'
    }))
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    const auctionBidsTable = await queryRunner.getTable('AuctionBids')
    const auctionBidsForeignKey = auctionBidsTable.foreignKeys.find(fk => fk.columnNames.indexOf('participantID') !== -1)
    await queryRunner.dropForeignKey('AuctionBids', auctionBidsForeignKey)
    await queryRunner.dropColumn('AuctionBids', 'participantID')
  }
}
