import { hash } from "bcrypt";

import { User } from "../models/User.js";

class UserController {
  async list(_, response) {
    const users = await User.findAll();

    return response.json(users);
  }

  async find(request, response) {
    const { id } = request.params;

    const user = await User.findOne({ where: { id } });

    return response.json(user);
  }

  async create(request, response) {
    const { username, email, password } = request.body;

    const hashedPassword = await hash(password, 10);

    const user = await User.create({
      username,
      email,
      password: hashedPassword,
    });

    return response.status(201).json(user);
  }

  async update(request, response) {
    const { id } = request.params;
    const { username, email } = request.body;

    await User.update({ username, email }, { where: { id } });

    return response.status(204).send();
  }

  async delete(request, response) {
    const { id } = request.params;

    await User.destroy({ where: { id } });

    return response.status(204).send();
  }
}

export default new UserController();
