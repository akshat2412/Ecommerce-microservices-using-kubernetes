import express from "express";
import { UserDbContext } from "../Data"
import { UserApiResponse } from "../Shared/Models";

export class UserController {
    private _userDbContext: UserDbContext

    constructor() {     
        this._userDbContext = new UserDbContext();   
    }

    public GetUser = async (req: express.Request, res: express.Response) => {
        let userName: string = req.params['userName']
        console.log(userName);
        let user = await this._userDbContext.GetUser(userName);

        if(user) {
            let userApiResponse = user as UserApiResponse;
            return res.status(200).json(userApiResponse);
        }
    }
}