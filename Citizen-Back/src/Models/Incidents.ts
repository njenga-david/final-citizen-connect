import { Request } from "express"
import { ExtendedRequest } from "../Middlewares/verifyTokens"

export interface IIncidents {
    id: string,
    title: string,
    description: string,
    location: string,
    multimedia: string,
    incidentsummarry: string,
    createdby: string,
    createdat: string,
    isDelted: number

}

interface addIncident {
    title: string,
    description: string,
    location: string,
    multimedia: string,
    incidentsummarry: string,
    createdby: string,
    createdat: string,
    isDelted: number

}

export interface IncidentRequest extends ExtendedRequest {
    body: addIncident
}