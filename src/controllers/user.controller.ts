import { Request, Response } from "express";
import { UsersService } from "../services/users.service";

const userService: UsersService = new UsersService();

export class UserController {
  constructor() {}

  getUsers(req: Request, res: Response) {
    const response = userService.getUsers(req.query);
    return res.status(response.statusCode).json(response);
  }

  getUserById(req: Request, res: Response) {
    const response = userService.getUserById(parseInt(req.params.id));
    return res.status(response.statusCode).json(response);
  }

  createUser(req: Request, res: Response) {
    const response = userService.createUser(req.body);
    return res.status(response.statusCode).json(response);
  }

  updateUser(req: Request, res: Response) {
    const response = userService.updateUserById(
      parseInt(req.params.id),
      req.body
    );
    return res.status(response.statusCode).json(response);
  }

  deleteUser(req: Request, res: Response) {
    const response = userService.deleteUserById(parseInt(req.params.id));
    return res.status(response.statusCode).json(response);
  }
}
