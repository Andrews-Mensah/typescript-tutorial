import mongoose from "mongoose";
import {customAlphabet} from "nanoid";
import { UserDocument } from "./user.model";


//@ts-ignore
// const nanoid = customAlphabet('abcdefghijklmnopqrstuvwxyz0123456789', 10)
const alp = 'abcdefghijklmnopqrstuvwxyz0123456789'

//session model

export interface ProductDocument extends mongoose.Document {
    user: UserDocument['_id'],
    title: string,
    description: string,
    price: number,
    image: string,
    createdAt: Date,
    updatedAt: Date
}


const productSchema = new mongoose.Schema<UserDocument>(
    {
        //@ts-ignore
    productId:{
        type: String,
        required: true,
        unique: true,
        default: ()=> `product_${alp}`
    },
    user: {type: mongoose.Schema.Types.ObjectId,ref: 'User'},
    title: {
        type: String,
        required: true,

    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})


const ProductModel = mongoose.model<ProductDocument>("Product", productSchema)


export default ProductModel;