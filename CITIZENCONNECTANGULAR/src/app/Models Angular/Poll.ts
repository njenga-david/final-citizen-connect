import {Request } from 'express'
import { addChoice, ChoiceRequest, IChoice } from './Choices';
import { number } from 'joi';
import { ExtendedRequest } from '../Middlewares/verifyTokens';
 

 export interface IPoll{
    id: string;
    question: string;
    startdate: string;
    enddate: string;
    createdby: string;
    createat:string;
    isDeleted: boolean;
 }

 interface addPoll{
    question: string;
    startdate: string;
    enddate: string;
    createdby: string;
    choices: string [];
}

export interface PollRequest extends ExtendedRequest {
    body:addPoll;
}

export interface Poll {
    poll: IPoll,
    choicesArray: IChoice[]
}