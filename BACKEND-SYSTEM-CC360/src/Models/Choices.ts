import exp from 'constants';
import {Request } from 'express'
 

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

export interface ChoiceRequest extends Request {
    body:addChoice;
}
