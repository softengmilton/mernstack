const express= require("express");          // get all power from express 
const app= express();
const router = require("./router/auth-router") //include router file
const connectDb=require('./utils/db')        //include database file




// uses for api json response 
app.use(express.json());

//prefix for url
app.use("/api/auth", router);




const PORT=5000;

connectDb().then(()=>{
app.listen(PORT, ()=>{    // port listener 

    console.log('server is running:',PORT)
});
});