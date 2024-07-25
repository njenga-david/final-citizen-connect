import { Request, Response, RequestHandler } from "express";
import { DBHelper } from "../Database Helpers";
import { ExtendedRequest } from "../Middlewares/verifyTokens";
import { IncidentsSchema } from "../Input Validation/incidentsValidation";
import { v4 as uid } from 'uuid'
import { IIncidents, IncidentRequest } from "../Models/Incidents";
import { PollRequest } from "../Models/Poll";


const dbInstance = new DBHelper();
export const addIncident = async (req: IncidentRequest, res: Response) => {
    try {
        // get data from the payload
        const createdby = req.info?.sub
        const role = req.info?.role

        // crrate a new incident id
        const id = uid()
        // validate user input
        const { error } = IncidentsSchema.validate(req.body)

        // return error incase of validation error
        if (error) {
            return res.status(500).json({ message: "User input validation failed! " + error })
        }

        // destructuring user input
        const { title, description, location, multimedia } = req.body

        const currentDate = new Date().toISOString().slice(0, -5);


        console.log(createdby, role)



        // check if user exists
        if (createdby && role === "Citizen") {
            // add the incident to the database
            await dbInstance.exec("addIncident", { id, title, description, location, multimedia, incidentsummary: "NO_SUMMARY", createdby, createdat: currentDate })

            // success message
            return res.status(200).json({ message: "Incident created successfully" })
        }

        //error message
        return res.status(400).json({ message: "No user found!" })

    } catch (error) {
        // error message
        return res.status(500).json({ message: "Something went wrong " + error })
    }
}

export const getAllIncidents: RequestHandler = async (req, res) => {
    try {

        const incidents = (await dbInstance.exec("getAllIncidents", {})).recordset as IIncidents[]
        if (incidents.length > 0) {
            return res.status(200).json(incidents)
        }

        return res.status(400).json({ message: "No incidents found!" })
    } catch (error) {

        // error message
        return res.status(500).json({ message: "Something went wrong " + error })
    }

}

export const getSpecificIncidentById = async (req: Request<{ id: string }>, res: Response) => {

    try {

        const id = req.params.id;

        const incident = (await dbInstance.exec("getSpecificIncidentById", { id })).recordset[0] as IIncidents;

        if (incident && incident.id) {
            return res.status(200).json(incident)
        }

        return res.status(400).json({ message: "No incident found!" });
    } catch (error) {

        return res.status(500).json({ message: "Something went wrong " + error });
    }

}

export const updateIncident = async (req: IncidentRequest, res: Response) => {

    try {
        // get data from the payload
        const createdby = req.info?.sub
        const role = req.info?.role

        // validate user input
        const { error } = IncidentsSchema.validate(req.body)

        // return error incase of validation error
        if (error) {
            return res.status(500).json({ message: "User input validation failed! " + error })
        }

        const id = req.params.id

        const incident = (await dbInstance.exec("getSpecificIncidentById", { id })).recordset[0] as IIncidents;
        if (incident && incident.id) {

            // destructuring user input
            const { title, description, location, multimedia } = req.body

            if (createdby && role === "Citizen") {

                // add the incident to the database
                await dbInstance.exec("updateIncident", { id, title, description, location, multimedia, createdby: incident.createdby })
                return res.status(200).json({ message: "Incident updated successfully" })
            }

            return res.status(400).json({ message: "No user found!" })

        }

        return res.status(400).json({ message: "No incident found!" });

    } catch (error) {

        return res.status(500).json({ message: "Something went wrong " + error });
    }
}

export const deleteIncident = async (req: Request<{ id: string }>, res: Response) => {
    try {
        const id = req.params.id;
        const incident = (await dbInstance.exec("getSpecificIncidentById", { id })).recordset[0] as IIncidents;
        if (incident && incident.id) {
            await dbInstance.exec("deleteIncident", { id })
            //success message
            return res.status(200).json({ message: "Incident deleted successfully" })
        }
        return res.status(400).json({ message: "No incident found!" });
    } catch (error) {
        return res.status(500).json({ message: "Something went wrong " + error });
    }
}