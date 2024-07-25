import { Router } from "express";
import { verifyTokens } from "../Middlewares/verifyTokens";
import { addMessage, deleteMessage, getAllMessages, updateMessage } from "../Contollers/messageController";

const messageRoutes =  Router();
messageRoutes.get("",getAllMessages)
messageRoutes.post("/addmessage",verifyTokens,addMessage)
messageRoutes.get("/:id",verifyTokens,getAllMessages)
messageRoutes.patch("/:id",verifyTokens,updateMessage)
messageRoutes.delete("/:id",verifyTokens,deleteMessage)

export default messageRoutes