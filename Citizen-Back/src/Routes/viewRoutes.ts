import { Router } from "express";
import { addView, deleteView, getAllViews, getSpecificViewById, updateView } from "../Contollers/viewController";
import { isPermittedCheck, verifyTokens } from "../Middlewares/verifyTokens";

const viewRouter= Router()

viewRouter.get("",getAllViews)
viewRouter.post("/addview",verifyTokens,addView)
viewRouter.get("/:id",getSpecificViewById)
viewRouter.patch("/:id",verifyTokens,isPermittedCheck,updateView)
viewRouter.delete("/:id",verifyTokens,isPermittedCheck,deleteView)

export default viewRouter