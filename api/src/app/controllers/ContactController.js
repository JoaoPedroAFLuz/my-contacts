class ContactController {
  // Listar todos os contatos
  index(request, response) {
    response.send({ message: 'Hellor, world!' });
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
