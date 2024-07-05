import {Request, Response} from "express";
import {users} from "../users-data/Users";
import UserService from "../user-service/UserService";
import User from "../models/User";


export default class UserController {

    public index(request: Request, response: Response) {
        return response.json(users);
    }

    public show(request: Request, response: Response) {
        const userService = new UserService();

        const {id} = request.params;
        const user: User = userService.showUser(id);
        return response.json(user);
    }
}


