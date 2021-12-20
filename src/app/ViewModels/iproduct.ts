import { ProductImage } from "./productImage/product-image";

export interface IProduct {
     id:number;
     name:string;
     price:number;
     description:string;
     quantity:number;
     // Image?:string;
     rate:number;
     currentSupplierID:number;
     currentCategoryID:number;
     product_Images:ProductImage[]

}
