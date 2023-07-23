

const express = require('express');
const router = express.Router();
const {home,createUser,getUser,editUser,deleteUser} = require('../controllers/userControllers')


router.get("/", home);
router.post('/createUser',createUser);
router.get('/getUser',getUser);
router.put('/editUser/:id',editUser);
router.delete('/deleteUser/:id',deleteUser);



module.exports = router ; 
