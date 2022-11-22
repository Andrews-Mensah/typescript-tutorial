import mongoose from "mongoose";
import config from 'config';
import logger from './logger'

async function connect(){

    const dbUri = config.get<string>('dbUri')

    try{
        await mongoose.connect(dbUri)
        logger.info ("DB is fully connected")
    }

    catch(error){
        console.log("Error", error)
        logger.info("Can't connect to db") 
        process.exit(1)
    }

}

export default connect;