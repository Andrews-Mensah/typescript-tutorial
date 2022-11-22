import {DocumentDefinition} from 'mongoose'
import {omit} from "lodash";
import UserModel, { UserDocument } from '../models/user.model';
import { FilterQuery, UpdateQuery } from "mongoose";



export async function createUser (input: DocumentDefinition<Omit<UserDocument, 'createdAt'|'updatedAt'| 'comparePassword' >>){

    try{

        return await UserModel.create(input)
    }

    catch(error: any){
        throw new Error (error)

    }
}

export async function validatePassword({email,password}:{email:string, password:string})
{
    const user = await UserModel.findOne({email})

    if(!user){
        return false;
    }

    const isValid = await user.comparePassword(password)

    if(!isValid) {
        return false;
    }

    const userObj = omit(user.toJSON(), "password")

    return userObj;

}


export async function findUser(query: FilterQuery <UserDocument>){
    return UserModel.findOne(query).lean()

}