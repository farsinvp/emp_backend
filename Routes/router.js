const express=require('express')

const userController=require('../controller/userController')

const multerConfig=require('../middleware/multermiddleware')

const router=new express.Router()

router.post('/add',multerConfig.single("profile"),userController.addUser)

router.get('/get-all-users',userController.getallUser)
module.exports=router


router.delete('/delete-user/:id',userController.deleteUser)

router.put('edit/user/:id',multerConfig.single("profile"),userController.editUser)

module.exports=router