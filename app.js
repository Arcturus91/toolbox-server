const express = require('express')
const router = require('./controller/router')
const app = express()
const cors = require('cors')

app.use(cors({ origin: ['http://localhost:3000', 'http://localhost:8000'] }))

app.use('/api', router)

app.listen('8000', () => {
  console.log('server listening')
})
