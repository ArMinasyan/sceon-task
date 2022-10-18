import { BaseService } from "./base.service";
import { UserType } from "../types/user.type";
import { ResponseType } from "../types/response.type";
import { GetUsersDto } from "../common/dtos/get-users.dto";

export class UsersService extends BaseService {
  private users: UserType[] = [
    {
      email: "user1@gmail.com",
      first_name: "Jane",
      last_name: "Doe",
      password: "password",
      id: 1,
    },
    {
      email: "user2@gmail.com",
      first_name: "John",
      last_name: "Doe",
      password: "password",
      id: 2,
    },
    {
      email: "user3@gmail.com",
      first_name: "John",
      last_name: "Doe",
      password: "password",
      id: 3,
    },
    {
      email: "user4@gmail.com",
      first_name: "John",
      last_name: "Doe",
      password: "password",
      id: 4,
    },
  ];
  private index = this.users.length + 1;

  getUsers(query: GetUsersDto): ResponseType {
    let users = this.users.filter((user) => {
      if (query.email) {
        return user.email === query.email;
      }

      if (query.first_name) {
        return user.first_name === query.first_name;
      }

      if (query.last_name) {
        return user.last_name === query.last_name;
      }

      return user;
    });

    if (query.offset >= 0 || query.limit >= 0) {
      users = users.slice(query.offset, query.offset + query.limit);
    }

    return this.responseGenerator.setData(users).generate();
  }

  getUserById(id: number): ResponseType {
    const user = this.users.filter((user) => user.id === id);
    if (!user) {
      return this.responseGenerator.setData(user).generate();
    } else {
      return this.responseGenerator
        .setStatus(404)
        .setSuccess(false)
        .setMessage(`User by id=${id} not found`)
        .generate();
    }
  }

  createUser(payload: UserType): ResponseType {
    const user = this.users.filter((user) => user.email === payload.email);
    if (user.length > 0) {
      return this.responseGenerator
        .setStatus(409)
        .setSuccess(false)
        .setMessage(`User already created.`)
        .generate();
    }

    this.users.push({
      ...payload,
      id: this.index,
    });
    return this.responseGenerator
      .setStatus(201)
      .setMessage(`User created.`)
      .setData({
        ...payload,
        id: this.index++,
      })
      .generate();
  }

  updateUserById(id: number, payload: UserType): ResponseType {
    const user = this.users.filter((user) => user.id === id);

    if (user.length === 0) {
      return this.responseGenerator
        .setStatus(404)
        .setSuccess(false)
        .setMessage(`User by id=${id} not found`)
        .generate();
    }

    const index = this.users.findIndex((user) => user.email === payload.email);
    this.users.splice(index, 1, {
      ...(payload.first_name
        ? { first_name: payload.first_name || user[0].first_name }
        : {}),
      ...(payload.last_name
        ? { last_name: payload.last_name || user[0].last_name }
        : {}),
      ...(payload.password
        ? { password: payload.password || user[0].password }
        : {}),
    });

    return this.responseGenerator
      .setStatus(200)
      .setMessage(`User data is updated`)
      .generate();
  }

  deleteUserById(id: number): ResponseType {
    const user = this.users.filter((user) => user.id === id);

    if (user.length === 0) {
      return this.responseGenerator
        .setStatus(404)
        .setSuccess(false)
        .setMessage(`User by id=${id} not found`)
        .generate();
    }

    const index = this.users.findIndex((user) => user.id === id);
    this.users.splice(index, 1);
    return this.responseGenerator
      .setStatus(200)
      .setMessage(`User is deleted`)
      .generate();
  }
}
