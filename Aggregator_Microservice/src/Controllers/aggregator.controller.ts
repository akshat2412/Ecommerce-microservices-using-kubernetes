import express from "express";
import { ApiService } from "../Shared/Services";
import { Order, User } from "../Shared/Models";

export class AggregateController {
    constructor() {        
    }

    public getOrderDetails = async (req: express.Request, res: express.Response) => {
        let username: string = req.params['username'];
        let orders: Order[];
        let user: User;
        return ApiService.getUser(username)
            .then((userData: any) => {
                user = JSON.parse(userData.body) as User;
                return;
            })
            .then(() => {
                return ApiService.getUserOrders(username);
            })
            .then((orderData: any) => {
                orders = JSON.parse(orderData.body).orders as Order[];
                return res.status(200).json({
                    user: user,
                    orders: orders
                });
            })
    }
}