const express= require("express");
const app= express();

app.get("/", (req,res)=>{
    
    res.status(200).send("Hello world");

});
app.get("/registration", (req,res)=>{
    
    res.status(200).send("registration");

});
app.get("/login", (req,res)=>{
    
    res.status(200).send("login");

});


const PORT=5000;
app.listen(PORT, ()=>{

    console.log('server is running:',PORT)
})