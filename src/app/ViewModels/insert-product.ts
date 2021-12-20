import { ProductImage } from "./productImage/product-image";

export interface InsertProduct {
     id:number;
     name:string;
     price:number;
     description:string;
     quantity:number;
     rate:number;
     currentSupplierID:number;
     currentCategoryID:number;
     
}
