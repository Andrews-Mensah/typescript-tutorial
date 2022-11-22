import {Request, Response, NextFunction} from "express";
import {omit} from "lodash";
import { createUserInput } from "../schema/user.schema";
import {createUser} from "../service/user.service"
import logger from "../utils/logger"


export async function createUserHandler(req: Request<{}, {}, createUserInput["body"]>, res:Response){
 
    try{
        const user = await createUser(req.body)
        
        const userObj = omit(user.toJSON(), "password");
        return res.status(201).send(userObj);
    }

    catch(error: any){
        logger.error(error)
        return res.status(409).send(error.message) //409 means conflict

    }
}


// export async function getUser(req: Request, res:Response){
 
//     try{
//         const user = await createUser(req.body)
//         //@ts-ignore
//         return res.status(200).send(omit(user.toJSON()), "password");
//     }

//     catch(error: any){
//         logger.error(error)
//         return res.status(409).send(error.message) //409 means conflict

//     }
// }