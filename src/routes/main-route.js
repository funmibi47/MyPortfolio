require('dotenv').config()
const router = require('express').Router()
const website = require('./website/website-router')

router.use('/',website)

module.exports = router