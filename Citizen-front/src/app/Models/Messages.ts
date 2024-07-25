import { Request } from "express"

export interface IMessage{
    id: string,
    chatid: string,
    userid:string,
    sender: string,
    messagetext: string,
    sentat: string,
    isDeleted: number

}

export  interface addMessage{
    chatid: string,
    userid:string,
    sender: string,
    messagetext: string,
    sentat: string,
    isDeleted: number
}

export interface AddMessageResponse{
    message: string
}

