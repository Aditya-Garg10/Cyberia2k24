import { Router } from "express";
import  {SignUp,Login,logOut}  from '../controllers/AuthController.js'
import { verifyToken } from "../middleware/AuthMiddleware.js";


const router = Router();

router.post("/signup", SignUp)
router.post("/login", Login)
router.post("/logout",logOut)


export default router;