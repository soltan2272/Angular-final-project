import { ProductImage } from "./productImage/product-image";

export interface IndexProduct {
    id:number,
    image:ProductImage[],
    name:string,
    rate:number,
    price:number,
    description : string,
    quantity:number,

}
