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

        console.log(req.body);
        res.status(200).json({message: req.body});
    } catch (error) {

        console.error("error");
        
    }

}





module.exports= {home,login,register};