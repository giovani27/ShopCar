const router = require('express').Router()
 
const carcontroller =  require('../constroler/index')
const loginController = require('../constroler/logincontroller')

router.get('/cars', carcontroller.index)
router.post('/cars', carcontroller.create)

router.post('/login', loginController.login)



module.exports = router