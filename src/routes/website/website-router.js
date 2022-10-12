require('dotenv').config()
const websiteRouter = require('express').Router()
const nodeMailer = require('nodemailer');
const wesiteController = require('../../controllers/website-controller')

websiteRouter.get('/home', wesiteController.home)
websiteRouter.get('/', wesiteController.home)

module.exports = websiteRouter;
