const express = require('express')
const router = new express.Router()

const userController = require('../Controllers/userController')
const bookController = require('../Controllers/bookController')
const OrderController = require('../Controllers/OrderController')
const jwtMiddleware = require('../Middlewares/jwtMiddleware')
const multerConfig = require('../Middlewares/MulterMiddleware')

// register
router.post('/user/register',userController.register)
// login
router.post('/user/login',userController.login)



// booksell
router.post('/book/sell',multerConfig.single('bookImage'),bookController.booksell)

// get all books
router.get('/books/all',bookController.getallbooks)
// delete bike

router.delete('/deletebook',bookController.deletebook)
// getalluser
router.get('/allusers',userController.getallusers)
// delete user
router.delete('/deleteuser',userController.deleteuser)
// addorder
router.post('/addorder',OrderController.addorder)
// getall orders
router.get('/allorders',OrderController.getallorders)
// delete order
// router.get('/deleteorder',OrderController.deletorder)




// export router
module.exports = router;