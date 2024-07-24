import { Request } from "express"
import { IMessage } from "./Messages"

export  interface IChat {
    id: String,
    userid: String,
    createdat: String,
    isDeleted: number
}

export interface addChat{
    userid: string,
    createdat: String,
    isDeleted: number
}


export interface Chat {
    chat: IChat,
    messagesArray: IMessage[]
}

export interface AddChatResponse{
    message: string
}
