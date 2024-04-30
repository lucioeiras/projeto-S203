import { Movie } from "../models/Movie.js";

class MovieController {
  async list(_, response) {
    const movies = await Movie.findAll();

    return response.json(movies);
  }

  async find(request, response) {
    const { id } = request.params;

    const movies = await Movie.findOne({ where: { id } });

    return response.json(movies);
  }

  async create(request, response) {
    const { name, description, score, genre, director } = request.body;

    const movie = await Movie.create({
      name,
      description,
      score,
      genre,
      director,
    });

    return response.status(201).json(movie);
  }

  async update(request, response) {
    const { id } = request.params;
    const { name, description, score, genre, director } = request.body;

    await Movie.update(
      { name, description, score, genre, director },
      { where: { id } },
    );

    return response.status(204).send();
  }

  async delete(request, response) {
    const { id } = request.params;

    await Movie.destroy({ where: { id } });

    return response.status(204).send();
  }
}

export default new MovieController();
