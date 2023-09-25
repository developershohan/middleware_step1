// import packages
import express from "express"
import { userController } from "../controllers/userController.js"
import { userMulter } from "../utils/multer.js"

// init route
const router = express.Router()

//config route
router.post("/user",userMulter ,userController)

// export router
export default router