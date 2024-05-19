const mongoose = require("mongoose");

//mongosh shell
// const URI=   " mongodb://127.0.0.1:27017/mern_admin"

const URI = process.env.MONGODB_URI;


// mongoose.connect(URI);


const connectDb= async ()=>{
    try {
        await mongoose.connect(URI);
        console.log("Connection successfull to DB")
    } catch (error) {
        console.error("Database connection error");
    }

}

module.exports = connectDb;