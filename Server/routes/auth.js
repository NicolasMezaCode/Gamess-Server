const express=require('express')
const {signUp,profile}=require('../controllers/authController')

const router=express.Router()

router.post('/signup',signUp)
router.get('/profile/:id',profile)

module.exports=router