import express from 'express'
import { check } from '../controllers/healthCheck';


const healthRouter = express.Router();

healthRouter.get("/health-check",check)



export default healthRouter;