const express= require("express");
const router=express.Router();


router.get("/", (req,res)=>{
    
    res.status(200).send("Welcome to router");

});

// here i can use get ,put ,delete all by concataning 
router.route("/register").get((req, res)=>{
    res.status(200).send("router different method")

})



module.exports = router;
