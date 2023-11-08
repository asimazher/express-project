const express = require("express")
const dotenv = require("dotenv")
const connectDataBase = require("./config/db")

dotenv.config({path: "./config/config.env"})

const app = express()

connectDataBase()

app.use(express.json())

app.listen(process.env.PORT,()=>{
    console.log(`server listening to port ${process.env.PORT}`)
})