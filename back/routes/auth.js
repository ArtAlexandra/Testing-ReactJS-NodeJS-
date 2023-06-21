import express from "express"
import { login, logout, register, post_image, get_image} from "../controllers/auth.js"


const router = express.Router()

router.post("/register", register)
router.post("/login",login)

router.post("/logout", logout)
router.post("/post_image", post_image)
router.post("/get_image", get_image)


export default router