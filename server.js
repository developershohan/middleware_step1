// import packages
import express from "express"
import dotenv from "dotenv"
import userRouter from "./routes/user.js"

// config dot env
dotenv.config()
const PORT = process.env.PORT

// init express
const app = express()

// init middleware
app.use(express.json())
app.use(express.urlencoded({extended:false}))

// init public
app.use(express.static("public"))

// add route
app.use(userRouter)
// init server
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
})