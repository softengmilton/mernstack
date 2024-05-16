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






module.exports= {home,login};