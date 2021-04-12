import * as dotenv from 'dotenv'

dotenv.config()
const path: string = `${__dirname}/../../.env`

dotenv.config({ path: path })

export default {
  TOKEN_KEY: process.env.TOKEN_KEY,
  DB_NAME: process.env.DB_NAME,
  DB_USERNAME: process.env.DB_USERNAME,
  DB_PASSWORD: process.env.DB_PASSWORD,
  PORT: process.env.PORT
}
