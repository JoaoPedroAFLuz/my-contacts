import { delay } from '../Utils/delays';

class ContactsService {
  async listContacts(orderBy = 'asc') {
    await delay(500);

    const response = await fetch(
      `http://192.168.15.55:3001/contacts?orderBy=${orderBy}`
    );

    return response.json();
  }
}

export default new ContactsService();
