const { uuid } = require('uuidv4');

const contacts = [
  {
    id: uuid(),
    name: 'João Pedro',
    email: 'joao.pedro.luz@hotmail.com',
    phone: '(77) 9 7777-7777',
    category_id: uuid(),
  },
];

class ContactRepository {
  findAll() {
    return new Promise((resolve) => {
      resolve(contacts);
    });
  }
}

module.exports = new ContactRepository();
