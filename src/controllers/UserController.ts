import {Request, Response} from "express";
import {users} from "../users-data/Users";

export default class UserController {
    public index(request: Request, response: Response) {
        return response.json(users);
    }
}


