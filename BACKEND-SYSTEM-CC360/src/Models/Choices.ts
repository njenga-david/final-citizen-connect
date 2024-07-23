import exp from 'constants';
import {Request } from 'express'
import { ExtendedRequest } from '../Middlewares/verifyTokens';
 

 export interface IChoice{
    id: string;
    pollid: string;
    choicetext: string;
    votecount: number;
    isDeleted: boolean;
 }

export interface addChoice{
    choicetext: string;
}

export interface ChoiceRequest extends ExtendedRequest {
    body:addChoice;
}
