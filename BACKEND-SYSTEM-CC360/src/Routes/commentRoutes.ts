import { Router } from "express";
import { addComment, deleteComment, getAllComments, getSpecificCommentById, updateComment } from "../Contollers/commentController";
import { verifyTokens } from "../Middlewares/verifyTokens";

const commentRoutes =  Router();
commentRoutes.get("",getAllComments)
commentRoutes.post("",verifyTokens,addComment)
commentRoutes.get("/:id",verifyTokens,getSpecificCommentById)
commentRoutes.patch("/:id",verifyTokens,updateComment)
commentRoutes.delete("/:id",verifyTokens,deleteComment)

export default commentRoutes