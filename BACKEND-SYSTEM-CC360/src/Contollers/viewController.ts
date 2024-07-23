import { Request, Response, RequestHandler } from "express";
import { DBHelper } from "../Database Helpers";
import { ExtendedRequest } from "../Middlewares/verifyTokens";
import { ViewSchema } from "../Input Validation/viewValidation";
import { IView, View, ViewRequest } from "../Models/Views";
import { v4 as uid } from 'uuid';
import { IComments } from "../Models/Comment";


const dbInstance = new DBHelper();
export const addView = async (req: ViewRequest, res: Response) => {

    try {
        const createdby = req.info?.sub;
        const role = req.info?.role
        console.log(role)

        const id = uid()

        const { error } = ViewSchema.validate(req.body);
        if (error) {
            return res.status(500).json({ message: "User input validation failed! " + error })
        }

        const { title, description } = req.body;

        const currentDate = new Date().toISOString().slice(0, 0);
        console.log(currentDate);

        //add the view
        if (createdby && role === "Citizen") {

            await dbInstance.exec("addView", { id, title, description, viewsummary: "NO_SUMMARRY", createdby, createdat: currentDate });
            return res.status(200).json({ message: "View created successfully" });

        }

        return res.status(400).json({ message: "You are not authorized" })


    } catch (error) {
        return res.status(500).json({ message: "Something went wrong " + error })
    }

}

export const getAllViews: RequestHandler = async (req, res) => {

    try {

        const views = (await dbInstance.exec("getAllViews", {})).recordset as IView[];
        const comments = (await dbInstance.exec("getAllComments", {})).recordset as IComments[]

        if (views.length === 0) {
            return res.status(400).json({ message: "No views found!" })
        }

        // if(comments.length===0){
        //     return res.status(400).json({message: "No comments found!"})
        // }



        const allViews: View[] = []

        for (let view of views) {

            let commentsArray: IComments[] = comments.filter((comment) => comment.viewid === view.id)

            const oneView: View = {
                view,
                commentsArray
            }
            allViews.push(oneView)
        }


        return res.status(200).json(allViews)
    } catch (error) {
        return res.status(500).json({ message: "Something went wrong " + error })
    }

}

export const getSpecificViewById = async (req: Request<{ id: string }>, res: Response) => {

    try {

        const id = req.params.id;

        const view = (await dbInstance.exec("getSpecificViewById", { id })).recordset[0] as IView;
        const comments = (await dbInstance.exec("getAllComments", {})).recordset as IComments[];




        if (view && view.id) {

            let commentsArray: IComments[] = comments.filter((comment) => comment.viewid === view.id)

            const oneView: View = {
                view,
                commentsArray
            }

            return res.status(200).json(oneView)
        }
        return res.status(400).json({ message: "No view found!" })

    } catch (error) {

        return res.status(500).json({ message: "Something went wrong " + error })
    }
}

export const updateView = async (req: ViewRequest, res: Response) => {

    try {

        const createdby = req.info?.sub;
        const role = req.info?.sub

        const { error } = ViewSchema.validate(req.body);
        if (error) {
            return res.status(500).json({ message: "User input validation failed! " + error })
        }

        const { title, description } = req.body;

        const id = req.params.id;


        const view = (await dbInstance.exec("getSpecificViewById", { id })).recordset[0] as IView;


        if (view && view.id) {

            //update the view
            await dbInstance.exec("updateView", { id, title, description, viewsummary: view.viewsummary, createdby: view.createdby });
            return res.status(200).json({ message: "View updated successfully" });

            console.log("Executed")

        }

        // return res.status(400).json({ message: "No view found!" })

    } catch (error) {
        return res.status(500).json({ message: "Something went wrong " + error })
    }
}

export const deleteView = async (req: Request<{ id: string }>, res: Response) => {
    try {

        const id = req.params.id;
        const view = (await dbInstance.exec("getSpecificViewById", { id })).recordset[0] as IView;

        if (view && view.id) {
            //delete the view
            await dbInstance.exec("deleteView", { id });
            return res.status(200).json({ message: "View deleted successfully" });

        }

        return res.status(400).json({ message: "No view found!" })
    } catch (error) {
        return res.status(500).json({ message: "Something went wrong " + error })
    }

}
