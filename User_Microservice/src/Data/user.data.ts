import fs from "fs";
import { UserList, User } from "../Shared/Models";

export class UserDbContext {
    private _userList: UserList;

    // Read seed data from data file, and store in in-memory list for further use.
    constructor() {
        let fileData = fs.readFileSync('src/Data/user.data.json');
        this._userList = JSON.parse(fileData.toString()) as UserList;
    }

    // Returns the user information object based on passed parameter.
    public GetUser = async (userName: string) => {
        return this._userList.userList.find((user: User) => {
            return user.userName === userName;
        })
    }
}