import { Response, Request, RequestHandler } from "express";
import { DBHelper } from "../Database Helpers";
import { ExtendedRequest } from "../Middlewares/verifyTokens";
import { v4 as uid } from 'uuid'
import { ChatSchema } from "../Input Validation/chatValidation";
import { Chat, ChatRequest, IChat } from "../Models/Chat";
import { IMessage } from "../Models/Messages";

const dbInstance = new DBHelper();

export const addChat = async (req: ChatRequest, res: Response) => {

    try {

        const createdby = req.info?.sub

        const id = uid()
        const { userid } = req.body

        const { error } = ChatSchema.validate(req.body)
        if (error) {
            return res.status(500).json({ message: "User input validation failed! " + error })
        }

        const currentDate = new Date().toISOString().slice(0, -5);
        console.log(currentDate);

        if (createdby) {

            await dbInstance.exec("addChat", { id, userid, createdat: currentDate })
            return res.json({ message: "Chat added successfully" })
        }

    } catch (error) {

        res.status(500).json({ message: "Something went wrong " + error })
    }
}

export const getAllChats: RequestHandler = async (req, res) => {

    try {

        const chats = (await dbInstance.exec("getAllChats", {})).recordset as IChat[];

        const messages = (await dbInstance.exec("getAllMessages", {})).recordset as IMessage[]

        const allChats:Chat[]=[]

        for (let chat of chats) {
     
            let  messagesArray:IMessage[] = messages.filter(message=>message.chatid===chat.id)

            const oneChat:Chat = {
                chat,
                messagesArray
            }

            allChats.push(oneChat)
        }

        if (allChats.length > 0) {
            return res.status(200).json(allChats)
        }

        return res.status(400).json({ message: "No chats found!" })
    } catch (error) {

        return res.status(500).json({ message: "Something went wrong " + error })
    }
}

export const getSpecificChatById = async (req: Request<{ id: string }>, res: Response) => {

    try {
        const id = req.params.id;
        const chats = (await dbInstance.exec("getSpecificChatById", { id })).recordset as IChat[];

        if (chats.length > 0) {

            return res.status(200).json(chats)
        }

        return res.status(400).json({ message: "No chats found!" })
    } catch (error) {

        return res.status(500).json({ message: "Something went wrong " + error })
    }
}

export const updateChat = async (req: ChatRequest, res: Response) => {

    try {
        const userid = req.info?.sub
        const id = req.params.id

        const { error } = ChatSchema.validate(req.body)
        if (error) {

            return res.status(500).json({ message: "User input validation failed! " + error })
        }

        const chat = (await dbInstance.exec("getSpecificChatById", { id })).recordset[0] as IChat;
        if (chat && chat.id) {

            const { userid } = req.body

            if (userid) {

                await dbInstance.exec("updateChat", { id, userid })
                return res.json({ message: "Chat updated successfully" })
            }

            return res.status(400).json({ message: "You are not authorized to update this chat!" })
        }

        return res.status(400).json({ message: "Chat not found!" })

    }

    catch (error) {
        res.status(500).json({ message: "Something went wrong " + error })
    }

}


export const deleteChat = async (req: ExtendedRequest, res: Response) => {
    try {

        const userid = req.info?.sub
        const id = req.params.id

        const chat = (await dbInstance.exec("getSpecificChatById", { id })).recordset[0] as IChat;
        if (chat && chat.userid) {

            if (userid) {

                await dbInstance.exec("deleteChat", { id })
                return res.json({ message: "Chat deleted successfully" })
            }

            return res.status(400).json({ message: "You are not authorized to delete this chat!" })

        }
        return res.status(400).json({ message: "Chat not found!" })

    } catch (error) {
        res.status(500).json({ message: "Something went wrong " + error })

    }
}