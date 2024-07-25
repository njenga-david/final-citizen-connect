import path from "path";
import dotenv from 'dotenv';
import Jwt from "jsonwebtoken";
dotenv.config({ path: path.resolve(__dirname, "../../.env") });
import { Request, Response, NextFunction } from "express";
import { IUser, Payload } from "../Models/User";

import { DBHelper } from "../Database Helpers";

const dbInstance = new DBHelper();

export interface ExtendedRequest extends Request {
    info?: Payload
}


export function verifyTokens(req: ExtendedRequest, res: Response, next: NextFunction) {

    try {
        const token = req.headers['token'] as string;
        if (!token) {
            return res.status(401).json({ message: "No token provided" });
        }
        const decodedData = Jwt.verify(token, process.env.SECRET_KEY as string) as Payload;

        req.info = decodedData;

    } catch (error) {
        return res.status(401).json({ message: "Invalid Token" });

    }

    next()

}

export function isAdminCheck(req: ExtendedRequest, res: Response, next: NextFunction) {
    try {
        const token = req.headers['token'] as string;
        if (!token) {
            return res.status(401).json({ message: "No token provided" });
        }
        const decodedData = Jwt.verify(token, process.env.SECRET_KEY as string) as Payload;

        req.info = decodedData;

        if (decodedData.role =='Administrator') {
            next();

        }else{
            return res.status(401).json({ message: "Permission denied!" });

        }

    } catch (error) {
        return res.status(401).json({ message: "Invalid Token" });

    }

}

export async function isPermittedCheck(req: ExtendedRequest, res: Response, next: NextFunction) {
    try {
        const token = req.headers['token'] as string;
        if (!token) {
            return res.status(401).json({ message: "No token provided" });
        }
        const decodedData = Jwt.verify(token, process.env.SECRET_KEY as string) as Payload;

        req.info = decodedData;

        const user = (await dbInstance.exec("getSpecificUserById",{id:decodedData.sub})).recordset[0] as IUser;
        if(user.id ==decodedData.sub){
            //ther user is and admin or  the signed in user is the one initiating the operation
            next();
        }else{
            return res.status(401).json({ message: "Permission denied!" });
        }

    } catch (error) {
        return res.status(401).json({ message: "Invalid Token" });
    }

}
  

