const express = require('express')
const { filesFormatter, healthCheck, filesList } = require('./routeHandler')
const router = express.Router()

router.get('/', healthCheck)
router.get('/files/data', filesFormatter)
router.get('/files/list', filesList)

module.exports = router
