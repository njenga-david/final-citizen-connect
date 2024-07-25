import { ExtendedRequest } from "../Middlewares/verifyTokens";

export interface IVote {
    id: string,
    pollid: string,
    choiceid: string,
    voterid: string,
    isDeleted: number
}


export interface addVote {
    pollid: string,
    choiceid: string,
    voterid: string,
    isDeleted: number
}


export interface VoteRequest extends ExtendedRequest {
    body:addVote;
}