const CategoryRepository = require('../repositories/CategoryRepository');

class CategoryController {
  async index(request, response) {
    const { orderBy } = request.query;
    const categories = await CategoryRepository.findAll(orderBy);

    return response.json(categories);
  }

  async show(request, response) {
    const { id } = request.params;
    const category = await CategoryRepository.findById(id);

    if (!category) {
      return response.status(404).json({ error: 'Category not found.' });
    }

    return response.json(category);
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
        .json({ error: `Already has a category with name: ${name}` });
    }

    const newCategory = await CategoryRepository.create({ name });

    return response.status(201).json(newCategory);
  }

  async update(request, response) {
    const { id } = request.params;
    const { name } = request.body;

    if (!name) {
      return response.status(400).json({ error: 'Name is required.' });
    }

    const category = await CategoryRepository.findById(id);

    if (!category) {
      return response.status(404).json({ error: 'Category not found.' });
    }

    const updatedCategory = await CategoryRepository.update(id, name);

    return response.json(updatedCategory);
  }

  async delete(request, response) {
    const { id } = request.params;

    await CategoryRepository.delete(id);

    return response.sendStatus(204);
  }
}

module.exports = new CategoryController();
