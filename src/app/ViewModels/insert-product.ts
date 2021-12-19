import { ProductImage } from "./productImage/product-image";

export interface InsertProduct {
    id:number;
     name:string;
     price:number;
     description:string;
     quantity:number;
     product_Images:ProductImage[];
     rate:number;
     currentSupplierID:number;
     currentCategoryID:number;
     
}
