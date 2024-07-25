import { DBHelper } from "../Database Helpers";
import { Request, Response, RequestHandler } from "express";
import { ExtendedRequest } from "../Middlewares/verifyTokens";
import { MessageSchema } from "../Input Validation/messageValidation";
import { v4 as uid } from 'uuid'
import { IMessage, MessageRequest } from "../Models/Messages";
import exp from "constants";


const dbInstance = new DBHelper()

export const addMessage = async (req: MessageRequest, res: Response) => {

    try {

        const createdby = req.info?.sub

        const id = uid()

        const { error } = MessageSchema.validate(req.body)
        if (error) {
            return res.status(500).json({ message: "User input validation failed! " + error })
        }

        const { chatid, userid, sender, messagetext } = req.body

        // Ensure the sender field is correctly set to either 'user' or 'ai'
        if (sender !== 'user' && sender !== 'ai') {
            return res.status(400).json({ message: "Invalid sender type! Must be 'user' or 'ai'." });
        }

        const currentDate = new Date().toISOString().slice(0, -5);
        console.log(currentDate);

        if (createdby) {
            await dbInstance.exec("addMessage", { id, chatid, userid, sender, messagetext, sentat: currentDate })
            res.status(200).json({ message: "Message created successfully" })
        }


        //  res.status(400).json({ message: "Unauthorized" });

    } catch (error) {

        res.status(500).json({ message: "Something went wrong " + error })

    }

}

export const getAllMessages: RequestHandler = async (req, res) => {

    try {

        const messages = (await dbInstance.exec("getAllMessages", {})).recordset as IMessage[]

        if (messages.length === 0) {
            return res.status(400).json({ message: "No messages available" })
        }

        return res.status(200).json({ messages })



    }

    catch (error) {

        return res.status(500).json({ message: "Something went wrong " + error })
    }
}

export const getSpecificMessageById = async (req: Request<{ id: string }>, res: Response) => {

    try {

        const id = req.params.id;

        const message = (await dbInstance.exec("getSpecificMessageById", { id })).recordset[0] as IMessage;

        if (message && message.id) {
            return res.status(200).json(message)
        }

        //  return res.status(400).json({ message: "No message found!" });
    } catch (error) {

        return res.status(500).json({ message: "Something went wrong " + error });
    }

}

export const updateMessage = async (req: MessageRequest, res: Response) => {

    try {

        const { error } = MessageSchema.validate(req.body)
        if (error) {
            return res.status(500).json({ message: "User input validation failed! " + error })
        }

        const id = req.params.id
        const { chatid, userid, sender, messagetext } = req.body

        const message = (await dbInstance.exec("getSpecificMessageById", { id })).recordset[0] as IMessage;
        if (message && message.id) {

            await dbInstance.exec("updateMessage", { id: message.id, chatid, userid, sender, messagetext })
            res.status(200).json({ message: "Message updated successfully" })

        }

        // return res.status(400).json({ message: "No message found!" });

    }

    catch (error) {

        return res.status(500).json({ message: "Something went wrong " + error })
    }
}


export const deleteMessage = async (req: Request<{ id: string }>, res: Response) => {

    try {

        const id = req.params.id;

        const message = (await dbInstance.exec("getSpecificMessageById", { id })).recordset[0] as IMessage;

        if (message && message.id) {

            await dbInstance.exec("deleteMessage", { id })
            res.status(201).json({ message: "Message deleted successfully" })
        }
       
      //  return res.status(400).json({ message: "No message found!" });

    } catch (error) {

        return res.status(500).json({ message: "Something went wrong " + error })
    }
}