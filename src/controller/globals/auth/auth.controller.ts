//logical code

/* flow
login/signin
register/signup--> incomming data ( username, email, password)
processign/checking --> email valid, compulsory data aaunu paryo 
db query --> table ma insert/read/delete/update
logout
forgot password
reset passwprd/otp




*/
// req , res come from routing
import {Request, Response } from "express" 
import User from "../../../database/models/user.model"

//json data --> req.body // username,email,password
//files -->req.file//files

const registerUser = async (req:Request,res:Response)=>{
// const username = req.body.usernmame
// const password =  req.body.password
// const email = req.body.email

const {username,password,email} =  req.body
if(!username || !password || !email){
    res.status(400).json({
        message:"Please provide username, password, email"
    }) 
}else{
    //  insert into Users table
   await User.create({
        username : username,
        password : password,
        email: email

    })
    res.status(200).json({
        message:"User registred successfully"
    })
}

}// functional

//oop
/*
class AuthController { 
 registerUser(req:Request,res:Response){

 }

}

*/

export {registerUser}