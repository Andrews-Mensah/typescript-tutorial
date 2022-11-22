import express from "express";
import { createProductHandler, deleteProductHandler, getProductHandler, updateProductHandler } from "../controllers/product.controller";
import { createProductSchema, deleteProductSchema, getProductSchema, updateProductSchema } from "../schema/product.schema";
import requireUser from "../validator/requireUser";
import validateResource from "../validator/validateResource";



const productRouter = express.Router();

productRouter.post("/products", [requireUser, validateResource(createProductSchema), ],createProductHandler )
productRouter.put("/products/:productId", [requireUser, validateResource(updateProductSchema), ],updateProductHandler )
productRouter.get("/products/:productId", validateResource(getProductSchema),getProductHandler )
productRouter.delete("/products/:productId", [requireUser, validateResource(deleteProductSchema)],deleteProductHandler )


export default productRouter;