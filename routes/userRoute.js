const express=require('express')
const router=express.Router()
const userData=require('../data/initialData')
const dataEntryLogger=require('../middlewares/userDataLogger')
const {getAllUserData,getUserById,displayUserForm,addUserData}=require('../Controller/userController')

router.get('/',getAllUserData)
router.get('/:id([0-9]{1,2})',getUserById)
router.param('id',(request,respond,next,id)=>
{
    request.user=userData[id-1]
    next()
})

//param-middleware

router.get('/new',displayUserForm)
router.post('/submit',dataEntryLogger,addUserData)

module.exports=router