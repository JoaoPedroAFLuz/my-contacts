import { HttpClient } from './utils/httpClient';

class CategoriesService {
  constructor() {
    this.httpClient = new HttpClient('http://192.168.15.55:3001');
  }

  async listCategories() {
    return this.httpClient.get(`/categories`);
  }
}

export default new CategoriesService();
