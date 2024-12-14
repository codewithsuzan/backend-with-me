// require('dotenv').config({path:'./env'})
import dotenv from "dotenv"
import connectDb from "./db/db.js";
import { app } from "./app.js";

dotenv.config({
    path:'./env'
})

connectDb()
.then(()=>{
    app.listen(process.env.PORT||8000,()=>{
        console.log(`🛞  Server is running at port:${process.env.PORT}`)
    })
})
.catch((error)=>{
    console.log("MONGO db connection failed !!!",error)
})



























// import express from "express"
// (async()=>{
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//     } catch (error) {
//         console.log(`Error:${error}`)
//         throw error
//     }
// })()