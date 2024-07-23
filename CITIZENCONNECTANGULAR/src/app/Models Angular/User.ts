export interface IUser{
    username: string
    upassword: string,
    uemail: string

}
export interface RegisterResponse{
    message: string
}

export interface LogInRequest{
    username: string,
    upassword: string
}

export interface Payload{
    sub: string;
    username: string;
    isAdmin:number,

}

export interface LogInResponse{
    message: string,
    token: string,
    payload:Payload

}