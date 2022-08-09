const express = require('express')
const router = express.Router()

const  { 
    send,
    authenticate
} = require('../controllers/api_controller.js')

router.get('/authenticate', authenticate)
router.post('/send', send) 

module.exports = router

