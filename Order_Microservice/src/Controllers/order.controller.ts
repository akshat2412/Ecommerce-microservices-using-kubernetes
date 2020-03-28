import express from "express";
import { OrderDbContext } from "../Data/order.data"

export class OrderController {
    private _orderDbContext: OrderDbContext

    constructor() {     
        this._orderDbContext = new OrderDbContext();   
    }

    public GetOrder = async (req: express.Request, res: express.Response) => {
        let orderId: string = req.params['orderId'];
        let order = await this._orderDbContext.GetOrder(orderId);

        if(order) {
            return res.status(200).json(order);
        }
    }
}