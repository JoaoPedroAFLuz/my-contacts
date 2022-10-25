const ContactRepository = require('../repositories/ContactRepository');

class ContactController {
  // Listar todos os contatos
  async index(request, response) {
    const contacts = await ContactRepository.findAll();

    return response.json(contacts);
  }

  // Obter um contato
  async show(request, response) {
    const { id } = request.params;
    const contact = await ContactRepository.findById(id);

    if (!contact) {
      return response.status(404).json({ error: 'Contact not found' });
    }

    return response.json(contact);
  }

  // Criar novo contato
  store() {}

  // Editar um contato
  update() {}

  // Excluir um contato
  async delete(request, response) {
    const { id } = request.params;
    const contact = await ContactRepository.findById(id);

    if (!contact) {
      return response.status(404).json({ error: 'Contact not found' });
    }

    await ContactRepository.delete(id);

    return response.sendStatus(204);
  }
}

module.exports = new ContactController();
