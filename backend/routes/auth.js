const express = require('express');
const router = express.Router();
const User = require("../models/User");
const fetchuser = require('../middleware/fetchuser');
        // express validator package(npm i --save express-validator) install for the validate user email and password
const {body,validationResult} = require('express-validator'); 
        //  bcrypt package used for password 
const bcrypt = require("bcryptjs");
        // jsonwebtoken package is used for generate token for particular user to enhance secuirty of user
        // for more documentation about jsonwebtoken visit (jwt io) website
const jwt = require('jsonwebtoken');
const JWT_SECRET = "Hello"
            // 1. default for learning purpose
// router.get('/',((req,res)=>{
//     console.log(req.body);
//     user = User(req.body);
//     user.save();
//     res.json(req.body);
// }))

    //    In [line 15,16,17] is used for validate email,username, password with the help of express-validator
router.post('/createuser',[
    // body('name').isLength({min:3}),
    // body('email').isEmail(),
    // body('password').isLength({min:5}),

            // or
        // With error that you want to display
    body('name','Enter a valid name').isLength({min:3}),
    body('email','Enter a valid email').isEmail(),
    body('password','Enter a valid password').isLength({min:5}),
],async (req,res)=>{
    const errors = validationResult(req);
    let success = false;
    if(!errors.isEmpty()){
        return res.status(400).json({success,errors:errors.array()});
    }
    // res.send(req.body);   direct sending of data to req.body
    //  saving data in database without userEvent.save()
    // check whether the user with this email already exists or not
    try{
        let user = await User.findOne({email: req.body.email});
        if(user){
            return res.status(400).json({success, error: "Already Exists"})
        }

        const salt = await bcrypt.genSalt(10);
            //   line 41:  Used to generate salt for password hashing
        const secPass = await bcrypt.hash(req.body.password,salt);
            //   line 42: Used to hash  salt with password(given by user) 
        user = await User.create({
            name:req.body.name,
            email: req.body.email,
            password: secPass,
        })
        const data = {
            user:{
                id:user.id
            }
        }
        const authToken = jwt.sign(data,JWT_SECRET)
        success=true;
        res.json({success,authToken})
    }catch(err){
        res.status(500).send("Some Error Occured");
        res.json({success, message:err.message})
                // or   
        // res.json({error:'Please Enter Valid Data'})
    }
    // In 37 line show the result on body
}) 
        // Login user
router.post('/login',[
    body('email','Enter a valid email').isEmail(),
    body('password','Password cannot be blank').exists(),
],async (req,res)=>{
            // validationresult for check given mail is correct in syntax or not or(like property of email)
    let success = false;
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }
    const {email,password} = req.body;
    try{
                // findind the email from the database
        let user = await User.findOne({email});
        if(!user){
            success = false;
            return res.status(400).json({ success, error: "Please try to login with correct credentials" });
        }
                // comparing the password by the method bcrypt which unhashed the user.password 
        const passwordCompare = await bcrypt.compare(password,user.password)
        if(!passwordCompare){
            success = false;
            return res.status(400).json({ success, error: "Please try to login with correct credentials" });
        }
                // getting userid 
        const data = {
            user:{
                id:user.id
            }
        }
                // generate token with the help of jsonwebtoken with the combination of data and secret string  
        const authToken = jwt.sign(data,JWT_SECRET);
        success = true;
        const name = user.name;
        res.json({ success, authToken,name });
    }catch(error){
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }

})
        // get user detail
    // fetcher is function used for fetching id of user
router.post('/getuser',fetchuser,async (req,res)=>{
    try{
        userId = req.user.id;
            // after getting id we fech out detail of the user except password
        const user = await User.findById(userId).select("-password");
        res.send(user);
    }catch(error){
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})
module.exports = router