export type Roles = 'CLIENTE' | 'ADMIN'; //COMO UN ENUM 

export interface SignIn{
    email : string;
    password : string;
}

export interface UserResponse{
    token : string ;
    //roles : Roles;
}
