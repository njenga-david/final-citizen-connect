import { Router } from "express";
import { addPoll, addVote, getAllPolls, getSpecificPoll } from "../Contollers/pollControler";
import { verifyTokens } from '../Middlewares/verifyTokens';

const pollRouter = Router();

pollRouter.get("",getAllPolls)
pollRouter.post("/addpoll",verifyTokens,addPoll)
pollRouter.post("/addvote",verifyTokens,addVote)
pollRouter.get("/:id",getSpecificPoll)
export default pollRouter