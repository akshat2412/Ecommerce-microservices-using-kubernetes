import got from 'got';

export class ApiService {

    public static getUserOrders(username: string): any {
        return got(`${process.env.ORDER_MICROSERVICE_URL}/order/${username}`)
    }

    public static getUser(username: string): any {
        return got(`${process.env.USER_MICROSERVICE_URL}/user/${username}`);
    }
}