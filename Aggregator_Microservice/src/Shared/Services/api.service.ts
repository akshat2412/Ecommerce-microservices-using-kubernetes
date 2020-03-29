import axios, { AxiosResponse } from 'axios';

export class ApiService {

    public static getUserOrders(userName: string): Promise<AxiosResponse> {
        return axios.get(`http://order-microservice:${process.env.ORDER_MICROSERVICE_PORT}/order/${userName}`);
    }

    public static getUser(username: string): Promise<AxiosResponse> {
        return axios.get(`http://user-microservice:${process.env.USER_MICROSERVICE_PORT}/user/${username}`);
    }
}