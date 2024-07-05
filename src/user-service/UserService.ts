import {users} from "../users-data/Users";
import AppError from "../errors/AppError";
import User from "../models/User";

export default class UserService {
    public showUser(id: string) {
        const user: User = users[id];

        if (!user) {
            throw new AppError("User não encontrado.");
        }

        return user;
    }
}