const User = require("../models/User");

//home
const home = async (req, res)=>{
    try {
        res.status(200).send("Welcome to home");

    } catch (error) {

        console.error("error");
        
    }
}

//login

const login = async (req,res)=>{
    try {
    res.status(200).send("welcome to login")

    } catch (error) {
        
    }
     
}

//register 

const register = async (req, res)=>{
    try {

        const {username,email,phone, password} =req.body;
        // const username=req.body.username;
        // const email=req.body.email;
        // const phone = req.body.phone;
        // const password = req.body.password;

        const userExist =await User.findOne({email:email});

        if(userExist){
            res.status(400).json({msg:"email already exist"});
        }

        await User.create({username,email,phone, password});

        console.log(req.body);
        res.status(200).json({message: req.body});
    } catch (error) {

        console.error("error");
        
    }

}





module.exports= {home,login,register};