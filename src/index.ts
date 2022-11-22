import express, {Express} from 'express';
import { NextFunction, Response, Request } from 'express';
import config from 'config';
import connect from './utils/connect';
import logger from './utils/logger'
import initAppRoutes from './router/init-app'
import http from "http";

import deserializeUser from "./validator/deserializeUser";




const port = config.get<number>('port')

const app: Express = express();

app.use(express.json())
app.use(deserializeUser)

const names = ["Oli-Andrea", "Andrea", "Oli"]

app.get('/', (req: Request, res:Response, next: NextFunction)=> {
    res.send(names)
})

const server = http.createServer(app)


server.listen(port, async ()=> {
    logger.info(`Server is up and running on port ${port}`)

    await connect();
})

server.on('listening', ()=> console.log("up and running"))

initAppRoutes(app)