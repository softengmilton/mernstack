const express= require("express");
const router=express.Router();
const {home , login} = require('../controllers/auth-controller');


router.get("/", (req,res)=>{
    
    res.status(200).send("Welcome to router");

});


router.route("/hello").get(home);
router.route('/login').get(login);



// here i can use get ,put ,delete all by concataning 
router.route("/register").get((req, res)=>{
    res.status(200).send("welcome to register")

})



module.exports = router;
