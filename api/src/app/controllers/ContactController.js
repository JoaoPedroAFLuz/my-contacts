const isValidUUID = require('../../utils/isValidUUID');
const ContactRepository = require('../repositories/ContactRepository');

class ContactController {
  // Listar todos os contatos
  async index(request, response) {
    const { orderBy } = request.query;
    const contacts = await ContactRepository.findAll(orderBy);

    return response.json(contacts);
  }

  // Obter um contato
  async show(request, response) {
    const { id } = request.params;

    if (!isValidUUID(id)) {
      return response.status(400).json({ error: 'Id must be an uuid' });
    }

    const contact = await ContactRepository.findById(id);

    if (!contact) {
      return response.status(404).json({ error: 'Contact not found.' });
    }

    return response.json(contact);
  }

  // Criar novo contato
  async store(request, response) {
    const { name, email, phone, category_id } = request.body;

    if (category_id && !isValidUUID(category_id)) {
      return response
        .status(400)
        .json({ error: 'Category id must be an uuid' });
    }

    if (!name) {
      return response.status(400).json({ error: 'Name is required' });
    }

    if (email) {
      const emailInUse = await ContactRepository.findByEmail(email);

      if (emailInUse) {
        return response.status(400).json({ error: 'Email already in use.' });
      }
    }

    const newContact = await ContactRepository.create({
      name,
      email: email || null,
      phone,
      category_id: category_id || null,
    });

    return response.status(201).send(newContact);
  }

  // Editar um contato
  async update(request, response) {
    const { id } = request.params;
    const { name, email, phone, category_id } = request.body;

    if (!isValidUUID(id)) {
      return response.status(400).json({ error: 'Id must be an uuid' });
    }

    if (category_id && !isValidUUID(category_id)) {
      return response
        .status(400)
        .json({ error: 'Category id must be an uuid' });
    }

    if (!name) {
      return response.status(400).json({ error: 'Name is required' });
    }

    const contact = await ContactRepository.findById(id);

    if (!contact) {
      return response.status(404).json({ error: 'Contact not found.' });
    }

    if (email) {
      const emailInUse = await ContactRepository.findByEmail(email);

      if (emailInUse && contact.email !== email) {
        return response.status(400).json({ error: 'Email already in use.' });
      }
    }

    const updatedContact = await ContactRepository.update(id, {
      name,
      email: email || null,
      phone,
      category_id: category_id || null,
    });

    return response.send(updatedContact);
  }

  // Excluir um contato
  async delete(request, response) {
    const { id } = request.params;

    if (!isValidUUID(id)) {
      return response.status(400).json({ error: 'Id must be an uuid' });
    }

    await ContactRepository.delete(id);

    return response.sendStatus(204);
  }
}

module.exports = new ContactController();
