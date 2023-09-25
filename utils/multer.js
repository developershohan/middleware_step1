// import packages
import multer from "multer"

// disk storage setup
const storage = multer.diskStorage({
    destination: (req,file,cb)=>{
        cb(null, "public")
    },
    filename:(req,file,cb)=>{
         cb(null, Date.now() + "_" + Math.floor(Math.random() * 1000) + "_" + file.originalname)
    }
})

//create multer middleware

export const createUserMulter = multer({storage}).single("userPhoto")
