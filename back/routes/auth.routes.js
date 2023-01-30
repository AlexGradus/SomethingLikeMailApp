const Router = require("express");
const User = require("../models/User");
const bcrypt = require("bcrypt");
const config = require("config");
const {check, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const router = new Router();
const authMiddleWare = require("../middleware/auth.middleware");

router.post('/getin',[
    check('name','Name has to be at least one character').isLength({min: 1, max: 50})

]
 ,async (req, res) =>{
    try {
        
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({message: 'Name has to be at least one character', errors})
        }
        const { name } = req.body;
        const user = await User.findOne({name})
        if(!user){
            const user = new User({name,message:[]});
            await user.save();
            return res.json({
                user
            })
        }
        return res.json({
           
            user
        })
     

    } catch(e){
        console.log(e);
        res.send({ message: 'Server Error' })
    }
})

router.post('/message',async (req, res) =>{
    try {
    
        const { name, message } = req.body;
        const candidate = await User.findOne({name})
        if(!candidate){
            return res.status(404).json({message: `No any user with name ${name}`})
        }
        const result = await User.updateOne({name:name},{$push:{message:message}});
      return res.json({
        result
    })

    } catch(e){
        console.log(e);
        res.send({ message: 'Server Error' })
    }
})
router.get('/users', async (req, res) =>{
    try {
       const user = await User.find();
        return res.json({
            user
        })

    } catch(e){
        console.log(e);
        res.send({ message: 'Server Error' })
    }
})

router.post('/user', async (req, res) =>{
    try {
       const { name } = req.body;
       const user = await User.findOne({name})
       
        return res.json({
            user
        })

    } catch(e){
        console.log(e);
        res.send({ message: 'Server Error' })
    }
})



module.exports = router;