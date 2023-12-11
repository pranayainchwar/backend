//require('dotenv').config({path:'./env'})  
// we are not using this as it distub the consistency of code we use another approch 
import dotenv from "dotenv"
import connectDB from "./db/index.js"; // here we got error when we not use .js

dotenv.config({
    path:'./env'
})

//2nd method of connecting data base 
// we are importing the connection we made in db => index.js
const app = express();
connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000, () =>{
        console.log(`Server is running at port :${process.env.PORT}`);
        app.on("error", (error)=>{
            console.log("Error:", error);
            throw error
        })
    })
})
.catch((err)=>{
 console.log("MONGO db connection failed !!!", err);
})












// import mongoose from "mongoose";
//importing the database from constants
// import { DB_NAME } from "./constants";
/* // 1ST Approch to connect 
//we initialise the app which is made by express
import express from "express"
// as data base is connected we see listner vo listners app ke pas hote he  so this event can listner by app ie app.on("eventListnername")
const app = express()
(async()=>{
     try{
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
         app.on("error", (error)=>{
            console.log("Eror:", error);
            throw error;
         })
         app.listen(process.env.PORT, ()=>{
            console.log(`App is listening  on port ${process.env.PORT}`)
         })
     }catch(error){
          console.error("Error:", error);
          throw err
     }
})()
*/