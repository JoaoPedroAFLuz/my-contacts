import { HttpClient } from './Utils/httpClient';

class ContactsService {
  constructor() {
    this.httpClient = new HttpClient('http://192.168.15.55:3001');
  }

  async listContacts(orderBy = 'asc') {
    return this.httpClient.get(`/contacts?orderBy=${orderBy}`);
  }

  async createContact(contact) {
    return this.httpClient.post('/contacts', contact);
  }
}

export default new ContactsService();
