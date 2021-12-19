import { IProduct } from "../iproduct";

export interface Ioffer {
    id:number;
    start_Date:Date;
    end_Date:Date;
    discount_Percentage:number;
    productOffers:IProduct[];
}
