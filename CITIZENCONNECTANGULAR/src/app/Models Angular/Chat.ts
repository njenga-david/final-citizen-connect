import { Request } from "express"
import { ExtendedRequest } from "../Middlewares/verifyTokens"
import { IMessage } from "./Messages"

export  interface IChat {
    id: String,
    userid: String,
    createdat: String,
    isDeleted: number
}

interface addChat{
    userid: string,
    createdat: String,
    isDeleted: number
}


export interface ChatRequest extends ExtendedRequest {
    body: addChat
}

export interface Chat {
    chat: IChat,
    messagesArray: IMessage[]
}