const express = require('express')
const router = express.Router()
const controller = require('../app/controllers/NewsController')

router.use('/newDetail', controller.moreInf)
router.use('/', controller.newsIndex)

module.exports = router