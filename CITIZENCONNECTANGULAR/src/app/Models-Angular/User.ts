

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

export interface addUser{
    username: string;
    email: string;
    password: string;
    role: string
   
}


export interface RegisterResponse{
    message: string
}
export interface UserUpdateResponse{
    message: string
}

export interface UserDeleteResponse{
    message: string
}

export interface OfficalApprovedResponse{
    message: string
}

export interface LogInRequest{
    username: string,
    upassword: string
}

export interface LogInResponse{
    message: string,
    token: string,
    payload:Payload

}

export interface Payload{
    sub: string;
    username: string;
    role:string

}



