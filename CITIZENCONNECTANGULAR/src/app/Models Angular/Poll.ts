import {Request } from 'express'
import { addChoice, ChoiceRequest, IChoice } from './Choices';
import { number } from 'joi';


 export interface IPoll{
    id: string;
    question: string;
    startdate: string;
    enddate: string;
    createdby: string;
    createat:string;
    isDeleted: boolean;
 }

 export interface addPoll{
    question: string;
    startdate: string;
    enddate: string;
    createdby: string;
    choices: string [];
}



export interface Poll {
    poll: IPoll,
    choicesArray: IChoice[]
}


export interface AddPollResponse{
    message: string
}

