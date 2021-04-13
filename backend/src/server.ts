import app from './app'

import './repositories/connect'

const PORT = process.env.PORT || 3333

app.listen(PORT, () => console.log(`Server Running at http://localhost:${PORT}!`))
