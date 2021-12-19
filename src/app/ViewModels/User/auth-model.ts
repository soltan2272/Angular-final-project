import { RegisterModel } from "./register-model";

export interface AuthModel {
    message:string
    isAuthenticated:boolean
     Username:string
     Email:string
     roles:string[]
     token:string
     expiresOn:string
     user_ID:number;
     data:RegisterModel;
}
