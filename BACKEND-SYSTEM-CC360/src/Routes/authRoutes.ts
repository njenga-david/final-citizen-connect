import { Router } from "express";
import { addUser, approveOfficial, deleteUser, forgotPassword, getAllUsers, getSpecificUserById, logInUser, updatePassword, updateUser } from "../Contollers/userController";
import { verifyTokens } from '../Middlewares/verifyTokens';


const authRouter = Router();

authRouter.get("",getAllUsers)
authRouter.post("/register",addUser)
authRouter.get("/:id",verifyTokens,getSpecificUserById)
authRouter.patch("/:id",verifyTokens,updateUser)
authRouter.delete("/:id",verifyTokens,deleteUser)
authRouter.post("/login",logInUser)
authRouter.post("/forgotpassword",verifyTokens,forgotPassword)
authRouter.patch("/updatepassword/:id",verifyTokens, updatePassword)
authRouter.post("/approveofficial/:id",verifyTokens, approveOfficial)
    
export default authRouter