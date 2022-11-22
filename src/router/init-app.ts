import { Application } from "express";
import healthRouter from "./routes";
import userRouter from "./userRoute/user.route";
import productRouter from "./product.route";



const initAppRoutes = (app: Application)=>{
    app.use("/api/v1/health", healthRouter)

    app.use("/api/v1/users", userRouter)

    app.use("/api/v1/product", productRouter)
}


export default initAppRoutes;