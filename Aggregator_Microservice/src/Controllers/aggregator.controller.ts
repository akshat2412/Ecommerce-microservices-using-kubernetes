import express from "express";
import { ApiService } from "../Shared/Services";
import { Order, User } from "../Shared/Models";

export class AggregateController {
    constructor() {        
    }

    public getOrderDetails = async (req: express.Request, res: express.Response) => {
        let username: string = req.params['username'];
        let order: Order;
        let user: User;
        return ApiService.getUser(username)
            .then((userData: any) => {
                user = userData.data as User;
                return;
            })
            .then(() => {
                return ApiService.getUserOrders(username);
            })
            .then((orderData: any) => {
                order = orderData.data as Order;
                return {
                    user: user,
                    orders: order
                }
            })
    }
}