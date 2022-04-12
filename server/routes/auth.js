const express= require('express');
const {signUp, signIn} = require('../controllers/authController.js')

const router = express.Router()

router.post('/', signUp)
router.post('/',  signIn)
router.get('/', (req,res)=>res.send('auth'))

module.exports= router