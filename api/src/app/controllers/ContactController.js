const ContactRepository = require('../repositories/ContactRepository');

class ContactController {
  // Listar todos os contatos
  async index(request, response) {
    const contacts = await ContactRepository.findAll();

    response.json(contacts);
  }

  // Obter um contato
  show() {}

  // Criar novo contato
  store() {}

  // Editar um contato
  update() {}

  // Excluir um contato
  delete() {}
}

module.exports = new ContactController();
