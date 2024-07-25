import { Request } from "express"
import { ExtendedRequest } from "../Middlewares/verifyTokens"

export interface IMessage{
    id: string,
    chatid: string,
    userid:string,
    sender: string,
    messagetext: string,
    sentat: string,
    isDeleted: number

}

interface addMessage{
    chatid: string,
    userid:string,
    sender: string,
    messagetext: string,
    sentat: string,
    isDeleted: number
}

export interface MessageRequest extends ExtendedRequest {
    body: addMessage
}