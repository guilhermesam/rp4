import app from './app'
import env from '../src/utils/config'

import './repositories/connect'

app.listen(env.PORT)
