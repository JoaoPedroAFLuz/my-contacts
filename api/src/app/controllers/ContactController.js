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
    const contact = await ContactRepository.findById(id);

    if (!contact) {
      return response.status(404).json({ error: 'Contact not found.' });
    }

    return response.json(contact);
  }

  // Criar novo contato
  async store(request, response) {
    const {
      name, email, phone, category_id,
    } = request.body;

    if (!name) {
      return response.status(400).json({ error: 'Name is required' });
    }

    const emailInUse = await ContactRepository.findByEmail(email);

    if (emailInUse) {
      return response.status(400).json({ error: 'Email already in use.' });
    }

    const newContact = await ContactRepository.create({
      name,
      email,
      phone,
      category_id,
    });

    return response.send(newContact);
  }

  // Editar um contato
  async update(request, response) {
    const { id } = request.params;
    const {
      name, email, phone, category_id,
    } = request.body;

    if (!name) {
      return response.status(400).json({ error: 'Name is required' });
    }

    const contact = await ContactRepository.findById(id);

    if (!contact) {
      return response.status(404).json({ error: 'Contact not found.' });
    }

    const emailInUse = await ContactRepository.findByEmail(email);

    if (emailInUse && contact.email !== email) {
      return response.status(400).json({ error: 'Email already in use.' });
    }

    const updatedContact = await ContactRepository.update(id, {
      name,
      email,
      phone,
      category_id,
    });

    return response.send(updatedContact);
  }

  // Excluir um contato
  async delete(request, response) {
    const { id } = request.params;

    await ContactRepository.delete(id);

    return response.sendStatus(204);
  }
}

module.exports = new ContactController();
