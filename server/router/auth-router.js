const express= require("express");
const router=express.Router();
//import controller file 
const AuthController = require('../controllers/AuthController');


router.get("/", (req,res)=>{
    
    res.status(200).send("Welcome to router");

});


router.route("/").get(AuthController.home);
router.route('/login').get(AuthController.login);
router.route('/register').post(AuthController.register);





// here i can use get ,put ,delete all by concataning 
// router.route("/register").get((req, res)=>{
//     res.status(200).send("welcome to regiter")

// })



module.exports = router;
