import {Request, Response, NextFunction} from "express";
import { CreateProductInput, UpdateProductInput, ReadProductInput, DeleteProductInput} from "../schema/product.schema";
import {createProduct, findProduct, deleteProduct, findAndUpdateProduct} from "../service/product.service"



export async function createProductHandler(req: Request <{}, {}, CreateProductInput ["body"]>,res: Response,next: NextFunction,){
    const userId = res.locals.user._id;

    const body = req.body;

    const product = await createProduct({...body, user: userId})

    return res.send(product)
}


export async function updateProductHandler(
    req: Request <UpdateProductInput["params"]>,
    res: Response,
    next: NextFunction,
){
    const userId = res.locals.user._id;

    const update = req.body;

    const productId = req.params.productId;
    const product = await findProduct({productId})

    if(!product){
        res.sendStatus(404)
    }

    if(String (product?.user !== userId)){
        return res.sendStatus(403)
    }

    const updatedProduct = await findAndUpdateProduct({productId}, update, {new: true})

    return res.send(updatedProduct)
}

export async function getProductHandler(
    req: Request<ReadProductInput["params"]>,
    res: Response,
    next: NextFunction,
){
    const productId = req.params.productId;
    const product = await findProduct({productId})

    console.log("Params", productId)

    if(!product){
        res.sendStatus(404)
    }

    res.send(product)
}

export async function deleteProductHandler(
    req: Request<DeleteProductInput["params"]>,
    res: Response,
    next: NextFunction,
){
    const userId = res.locals.user._id;
    const productId = req.params.productId;
    const product = await findProduct({productId})

    if(!product){
        res.sendStatus(404)
    }

    if(product?.user !== userId){
        return res.sendStatus(403)
    }

    await deleteProduct({productId})

    return res.sendStatus(200)
}