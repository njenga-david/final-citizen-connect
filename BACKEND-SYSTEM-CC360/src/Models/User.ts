 import {Request } from 'express'
 
export interface IUser{
    id:string,
    username:string,
    email:string,
    password:string,
    role: string,
    status:number;
    isDeleted:number,
    isEmailsent:number
}

interface addUser{
    username: string;
    email: string;
    password: string;
    role: string,
   
}

export interface Payload{
    sub: string;
    username: string;
    role:string,

}

export interface UserRequest extends Request {
    body:addUser;
}