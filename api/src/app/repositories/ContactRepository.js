const { v4 } = require('uuid');

let contacts = [
  {
    id: v4(),
    name: 'João',
    email: 'joao.pedro.luz@hotmail.com',
    phone: '(77) 9 7777-7777',
    category_id: v4(),
  },
  {
    id: v4(),
    name: 'Pedro',
    email: 'joao.pedro.luz25@gmail.com',
    phone: '(77) 9 7777-7777',
    category_id: v4(),
  },
];

class ContactRepository {
  findAll() {
    return new Promise((resolve) => {
      resolve(contacts);
    });
  }

  findById(id) {
    return new Promise((resolve) => {
      resolve(contacts.find((contact) => contact.id === id));
    });
  }

  delete(id) {
    return new Promise((resolve) => {
      contacts = contacts.filter((contact) => contact.id !== id);
      resolve();
    });
  }
}

module.exports = new ContactRepository();
