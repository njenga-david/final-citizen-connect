import { Router } from "express";
import { addChat, deleteChat, getAllChats, getSpecificChatById, updateChat } from "../Contollers/chatController";
import { verifyTokens } from "../Middlewares/verifyTokens";

const chatRoutes =  Router();
chatRoutes.get("",getAllChats)
chatRoutes.post("/addchat",verifyTokens,addChat)
chatRoutes.get("/:id",verifyTokens,getSpecificChatById)
chatRoutes.patch("/:id",verifyTokens,updateChat)
chatRoutes.delete("/:id",verifyTokens,deleteChat)

export default chatRoutes