import {Request, Response, NextFunction} from "express"
import logger from "../utils/logger"



export const check = async (req: Request, res:Response, next: NextFunction) =>{
    try{
        return res.sendStatus(200)
    }
    catch (err){
        logger.info(err)
    }
}