const CategoryRepository = require('../repositories/CategoryRepository');

class CategoryController {
  async index(request, response) {
    const { orderBy } = request.query;
    const categories = await CategoryRepository.findAll(orderBy);

    return response.json(categories);
  }

  async store(request, response) {
    const { name } = request.body;

    if (!name) {
      return response.status(400).json({ error: 'Name is required.' });
    }

    const hasCategory = await CategoryRepository.findByName(name);

    if (hasCategory) {
      return response
        .status(400)
        .json({ error: `Alredy has a category with name: ${name}` });
    }

    const newCategory = await CategoryRepository.create({ name });

    return response.status(201).send(newCategory);
  }
}

module.exports = new CategoryController();
