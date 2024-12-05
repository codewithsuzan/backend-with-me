// require('dotenv').config({path:'./env'})
import dotenv from "dotenv"
import connectDb from "./db/db.js";

dotenv.config({
    path:'./env'
})


connectDb()



























// import express from "express"
// (async()=>{
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//     } catch (error) {
//         console.log(`Error:${error}`)
//         throw error
//     }
// })()