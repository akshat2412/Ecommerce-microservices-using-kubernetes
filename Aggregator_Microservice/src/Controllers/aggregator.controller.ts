import express from "express";
import { ApiService } from "../Shared/Services";
import { Order, User } from "../Shared/Models";
import { logger } from "../../logger";

export class AggregateController {
    constructor() {        
    }

    public getOrderDetails = async (req: express.Request, res: express.Response) => {
        let username: string = req.params['username'];
        let orders: Order[];
        let user: User;
        logger.info(`getting user ${username} from user microservice`);
        return ApiService.getUser(username)
            .then((userData: any) => {
                user = JSON.parse(userData.body) as User;
                logger.info(`got user ${username} from user microservice`);
                return;
            })
            .then(() => {
                logger.info(`getting orders for user ${username} from order microservice`);
                return ApiService.getUserOrders(username);
            })
            .then((orderData: any) => {
                orders = JSON.parse(orderData.body).orders as Order[];
                logger.info(`got orders for user ${username} from order microservice`);
                logger.info(`returning orderdetails for ${username}`);
                return res.status(200).json({
                    user: user,
                    orders: orders
                });
            })
    }
}