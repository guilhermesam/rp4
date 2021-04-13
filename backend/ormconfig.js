module.exports = {
  type: process.env.DATABASE_PROVIDER,
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  entities: ['entities/*.ts'],
  migrations: ['repositories/migrations/*.ts'],
  cli: {
    migrationsDir: 'migration'
  }
}
