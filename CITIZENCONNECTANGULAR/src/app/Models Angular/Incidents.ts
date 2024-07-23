import { Request } from "express"

export interface IIncident {
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

export interface addIncident {
    title: string,
    description: string,
    location: string,
    multimedia: string,
    incidentsummarry: string,
    createdby: string,
    createdat: string,
    isDelted: number

}

export interface AddIncidentResponse{
    message: string
}


