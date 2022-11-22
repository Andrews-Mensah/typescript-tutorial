import {Request, Response, NextFunction} from "express";
import { createSession, getSessions, updateSession } from "../service/session.service";
import { validatePassword } from "../service/user.service";
import { signJWT } from "../utils/jwt.utils";
import config from "config";

export async function createUserSessionHandler(req: Request, res: Response, next: NextFunction){

    try{
        //validate the user's password


    const user = await validatePassword(req.body)
    console.log("USER", user)

    if(!user){
        return res.status(401).send("Invalid email or password");
    }

    //create a session

    const session = await createSession(user._id, req.get("user-agent") || "")


    //create an access token

    const accessToken  = signJWT(
        { ...user, session: session._id},
        {expiresIn: config.get("accessTokenTtl")}, //10 minutes
    );


    //create refresh token

    const refreshToken  = signJWT(
        { ...user, session: session._id},
        {expiresIn: config.get("refreshTokenTtl")}, //10 minutes
    );


    //return access and refresh tokens

    res.send({"accessToken": accessToken, "refreshToken": refreshToken})
    }

    catch(err){
        console.log("Err ======", err)
        res.status(400).send({"message": err})
    }
}



export async function getUserSessionsHandler(req:Request, res: Response, next: NextFunction){
     const userID = res.locals.user._id;
     console.log("ID>>>>>>", userID)

     const sessions = await getSessions({
        user: userID,
        valid: true
     })

     res.send(sessions)
}

export async function deleteUserSessionHandler(req: Request, res: Response, next: NextFunction){

    const uuuuu = res.locals.user;

    console.log("uuuuuuuu>>>>>>", uuuuu)
    const sessionID = res.locals.user.session;

    await updateSession({_id: sessionID}, {valid: false})

    return res.send({
        accessToken: null,
        refreshToken: null
    })
}