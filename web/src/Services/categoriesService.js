import { HttpClient } from './Utils/httpClient';

class CategoriesService {
  constructor() {
    this.httpClient = new HttpClient('http://192.168.15.55:3001');
  }

  listCategories() {
    return this.httpClient.get(`/categories`);
  }
}

export default new CategoriesService();
