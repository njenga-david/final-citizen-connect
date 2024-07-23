import { Request } from "express"

export interface IComments{
    id: string,
    comment: string,
    viewid: string,
    createdby: string,
    createdat: string,
    isDeleted: number
}

export interface addComment{
    comment: string,
    createdby: string,
    viewid:string
    createdat: string,
    isDelted: number
}

export interface AddCommentResponse{
    message: string
}

