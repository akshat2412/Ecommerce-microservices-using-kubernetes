import express from "express";
import { OrderDbContext } from "../Data"

export class OrderController {
    private _orderDbContext: OrderDbContext

    constructor() {     
        this._orderDbContext = new OrderDbContext();   
    }

    public getOrder = async (req: express.Request, res: express.Response) => {
        let orderId: string = req.params['orderId'];
        let order = await this._orderDbContext.getOrder(orderId);

        if(order) {
            return res.status(200).json(order);
        }
    }

    public getUserOrders = async (req: express.Request, res: express.Response) => {
        let username: string = req.params['username'];
        let orderList = await this._orderDbContext.getUserOrders(username);
        
        if(orderList.length > 0) {
            return res.status(200).json({
                orders: orderList
            })
        }
    }
}