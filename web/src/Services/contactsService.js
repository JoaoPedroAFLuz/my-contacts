import { HttpClient } from './Utils/httpClient';
import contactMapper from './Mappers/contactMapper';

class ContactsService {
  constructor() {
    this.httpClient = new HttpClient('http://192.168.15.55:3001');
  }

  async listContacts(orderBy = 'asc') {
    const contacts = await this.httpClient.get(`/contacts?orderBy=${orderBy}`);

    return contacts.map(contactMapper.toDomain);
  }

  async getContactById(id) {
    const contact = await this.httpClient.get(`/contacts/${id}`);

    return contactMapper.toDomain(contact);
  }

  createContact(contact) {
    const body = contactMapper.toPersistence(contact);

    return this.httpClient.post('/contacts', { body });
  }

  updateContact(id, contact) {
    const body = contactMapper.toPersistence(contact);

    return this.httpClient.put(`/contacts/${id}`, { body });
  }

  deleteContact(id) {
    return this.httpClient.delete(`/contacts/${id}`);
  }
}

export default new ContactsService();
