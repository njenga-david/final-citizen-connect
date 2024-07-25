import { Router } from "express";
import { addIncident, deleteIncident, getAllIncidents, getSpecificIncidentById, updateIncident } from "../Contollers/incidentController";
import { isPermittedCheck, verifyTokens } from "../Middlewares/verifyTokens";


export const incidentRouter = Router();
incidentRouter.get("",getAllIncidents)
incidentRouter.post("",verifyTokens,addIncident)
incidentRouter.get("/:id",verifyTokens,getSpecificIncidentById)
incidentRouter.patch("/:id",verifyTokens,isPermittedCheck,updateIncident)
incidentRouter.delete("/:id",verifyTokens,isPermittedCheck,deleteIncident)

export default incidentRouter


