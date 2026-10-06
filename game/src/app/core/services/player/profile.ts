export interface Profile{
    success:boolean;
    code?:null;
    description?:null;
    login:string;
    nickname:string;
    email:string;
    firstName:string;
    lastName:string;
    birthday?:null;
    address:Address;
    mobileVerified:number;
    ssn:any,
    pixelURL: any;

}
export interface Address{
    address?:null;
    city:string;
    state?:null;
    zipCode?:null;
    country:string;
    phone:string;
}